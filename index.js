// Initial config and require statements
require('dotenv').config();

// DB
const db = require('./models/db');

// Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// Using dependencies
app.use(session({
  store: new pgSession({
    pgPromise: db
  }),
  secret: 'g8j3lsa0sk2bbfhv5486nfgvge-387356!', // remember to adjust before deploying
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000 //Adjusts max time of session to 30 days
  }
}));

app.use(express.static('public')); // all static files will be served from public folder

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  console.log(isLoggedIn);
  next();
})

// REQUIRE MODELS AND VIEWS FUNCTIONS
const page = require(`./views/page`);
const helper = require(`./views/helper`);
const noteForm = require(`./views/noteForm`);
const settingsPage = require(`./views/settings`);

const User = require(`./models/User`);
const Notes = require(`./models/Notes`);
const Question = require(`./models/Questions`);
const Answer = require(`./models/Answer`);

const d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();

let today = `${year}-${month}-${date}`;

function protectRoute(req, res, next) {
  let isLoggedIn = req.session.user ? true : false;
  if (isLoggedIn) {
    next();
  }
  else {
    res.redirect('/');
  }
}

// ROUTES

// ROOT
app.get('/', (req, res) => {
  res.send(
    page(`
      ${helper.header(false)}
      ${helper.loginForm()}
      ${helper.registrationForm()}
      ${helper.ourMission()}
      ${helper.footer()}
    `)
  )
});

// REGISTER // post only
app.post(`/register`, (req, res) => {
  User.addUser(req.body.displayName, req.body.email, req.body.password)
    .then(user => {
      req.session.user = user;
      console.log(req.session.user);
      res.redirect(`/${user.id}/home`);
    })
});

// LOGIN // Post only
app.post(`/login`, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.getByEmail(email)
    .catch(err => {
      console.log(err);
    })
    .then(user => {
      const didMatch = user.checkPassword(password);

      if (didMatch) {
        req.session.user = user;
        console.log(req.session.user);
        res.redirect(`/${req.session.user.id}/home`);
      }
      else {
        res.redirect(`/`);
      }
    })

});

// UserHOME
app.get(`/:id([0-9]+)/home`, protectRoute, (req, res) => {
  let user = req.session.user;
  helper.gettingAnswers(req.session.user)
    .then(answers => {
      Notes.getAllNotes(req.session.user.id)
        .then(notes => {
          console.log(answers);
          res.send(page(`
        ${helper.header(req.session.user)}
        ${helper.homePage('Welcome back, ' + user.displayname, req.session.user.id)}
        ${noteForm(notes)}
        ${helper.sendData(answers)}
        `));
        })
    })
})


// getAnswerByDate(id, date)
function protectQuestions(req, res, next) {
  Answer.checkAnswerByDate(req.session.user.id, today)
    .then(results => {
      if (results[0].length > 0) {
        next();
      } else {
        res.redirect(`/${req.session.user.id}/home`);
      } return results
    }).catch(err => {
      next();
    })
}

// QUESTIONS
app.get(`/:id([0-9]+)/questions`, protectRoute, protectQuestions, (req, res) => {
  let questions = ``;
  Question.getQuestions()
    .then(array => {
      array.forEach(question => {
        questions += helper.drawQues(question.questiontext, question.id);
      })
      res.send(page(`
        ${helper.header(req.session.user)}
        ${helper.questions(questions)}`));
    });
});

app.post(`/answers`, (req, res) => {
  Answer.add(req.body.name1, today, req.session.user.id, 1)
  Answer.add(req.body.name2, today, req.session.user.id, 2)
  Answer.add(req.body.name3, today, req.session.user.id, 3)
  Answer.add(req.body.name4, today, req.session.user.id, 4)
  Answer.add(req.body.name5, today, req.session.user.id, 5)
  Answer.add(req.body.name6, today, req.session.user.id, 6)
  res.redirect(`/${req.session.user.id}/home`);
})

// LOGOUT
app.post(`/logout`, (req, res) => {
  req.session.destroy();
  res.redirect('/');
})


// USER SETTINGS
app.get(`/user/settings`, protectRoute, (req, res) => {
  res.send(page(`
    ${helper.header()}
    ${settingsPage.settingsPage(req.session.user.emailaddress, req.session.user.displayname)}
    ${settingsPage.changePassword()}
    `));
})

// allow users to change name or email address
app.post(`/user/settings`, protectRoute, (req, res) => {
  req.session.user.displayname = req.body.displayNameText;
  User.getById(req.session.user.id)
    .then(user => {
      user.updateDisplayNameAndEmail(req.body.displayNameText, req.body.emailAddressText);
    })
  res.redirect(`/${req.session.user.id}/home`);
})

app.post(`/password`, protectRoute, (req, res) => {

  const password = req.body.current;
  const newPass = req.body.newPass;
  const check = req.body.newPassCheck;
  User.getById(req.session.user.id)
    .then(user => {
      const match = user.checkPassword(password);

      if (match && newPass === check && newPass.length >= 8) {
        user.updatePassword(newPass);
        res.redirect(`/${req.session.user.id}/home`);
      }
      else {
        res.redirect(`/user/settings`);
      }

    })
})

// NOTES // post only
// allow user 
app.post(`/notes/add`, (req, res) => {
  // let today = `${year}-${month}-${date}`;
  Notes.add(today, req.body.noteText, req.session.user.id)
  console.log(req.body.noteText, req.session.user.id)
  res.redirect(`/${req.session.user.id}/home`);
})

// LISTEN ON PORT
app.listen(3000, () => {
  console.log(`Ready...`);
});