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
  secret: 'whatever123', // remember to adjust before deploying
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

const User = require(`./models/User`);
const Health = require(`./models/Health`);
const Question = require(`./models/Questions`);
const Answer = require(`./models/Answer`);

function protectRoute(req, res, next) {
  let isLoggedIn = req.session.user ? true : false;
  if (isLoggedIn) {
    next();
  }
  else {
    res.redirect('/');
  }
}

// function protectUser(req, res, next) {
//   if (req.params.id === req.session.user.id) {
//     next();
//   }
//   else {
//     res.redirect(`/`);
//   }
// }

// ROUTES

// ROOT
app.get('/', (req, res) => {
  res.send(
    page(`
      ${helper.header('HEY', false)}
      ${helper.loginForm()}
      ${helper.registrationForm()}
      ${helper.ourMission()}
    `)
  )
});

// REGISTER // post only
app.post(`/register`, (req, res) => {
  User.addUser(req.body.displayName, req.body.email, req.body.password)
    .then(user => {
      req.session.user = user;
      console.log(req.session.user);
      res.redirect(`/user/${user.id}/home`);
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
        res.redirect(`/user/${user.id}/home`);
      }
      else {
        res.redirect(`/`);
      }
    })

});

// UserHOME
app.get(`/user/:id([0-9]+)/home`, protectRoute, (req, res) => {
  User.getById(req.params.id)
    .then(user => {
      res.send(page(`
        ${helper.header('Hello ' + user.displayname, req.session.user)}
      `));
    });
});

// QUESTIONS
app.get(`/user/:id([0-9]+)/questions`, protectRoute, (req, res) => {
  // 
});

// LOGOUT
app.post(`/logout`, (req, res) => {
  req.session.destroy();
  res.redirect('/');
})


// LISTEN ON PORT
app.listen(3000, () => {
  console.log(`Ready...`);
});