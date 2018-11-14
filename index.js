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

// app.use((req, res, next) => {
//   let isLoggedIn = req.session.user ? true : false;
//   console.log(isLoggedIn);
//   next();
// })

// REQUIRE MODELS AND VIEWS FUNCTIONS
const page = require(`./views/page`);
const helper = require(`./views/helper`);

function protectRoute(req, res, next) {
  let isLoggedIn = req.session.user ? true : false;
  if (isLoggedIn) {
    next();
  }
  else {
    res.redirect('/login');
  }
}

// ROUTES

// ROOT
app.get('/', (req, res) => {
  res.send(page(``));
})

// REGISTER // post only
app.post(`/register`, (req, res) => {
  res.send(page(``));
})

// LOGIN // Post only
app.post(`/login`, (req, res) => {
  res.send(page(``));
})

// UserHOME
app.get(`/home`, (req, res) => {
  res.send(page(``));
})


// LISTEN ON PORT
app.listen(3000, () => {
  console.log(`Ready...`);
})