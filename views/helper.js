let Answer = require(`../models/Answer`);

function header(isLoggedIn = false) {
  return `
    <header>

    ${
    isLoggedIn ? settingsLink() : none()
    }
    <h1>uMood</h1>
    ${
    isLoggedIn ? logoutButton() : none()
    }

    </header>
  `
}

function footer() {
  return ` <footer>
  <h5>Built by:<br></h5>
    <ul class="social-links">
      <li>Ed Whelan
        <ul class="icons">
          <li><a href=#><i class="fas fa-envelope-square" target="_blank"></i></a></li>
          <li><a href=#><i class="fab fa-linkedin" target="_blank"></i></a></li>
          <li><a href=#><i class="fab fa-github" target="_blank"></i></a></li>

        </ul>
      </li>
      <li>Lorenzo Salvio
      <ul class="icons">
      <li><a href="mailto:salviolorenzo@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a></li>
      <li><a href="https://linkedin.com/in/lorenzo-salvio" target="_blank"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="https://github.com/salviolorenzo" target="_blank"><i class="fab fa-github"></i></a></li>

    </ul></li>
      <li>Sam Erickson
      <ul class="icons">
      <li><a href=#><i class="fas fa-envelope-square" target="_blank"></i></a></li>
      <li><a href=#><i class="fab fa-linkedin" target="_blank"></i></a></li>
      <li><a href=#><i class="fab fa-github" target="_blank"></i></a></li>

    </ul></li>
    </ul>

  </footer>`
}



function none() {
  return ``;
}
// Functions for ROOT

// Login Form
function loginForm() {
  return `
  <section class="loginReg">
  <form action="/login" method="POST">
      <label>
          Email address:<br>
          <input type="text" name="email" required>
      </label>
      <br>
      <label>
          Password:<br>
          <input type="password" name="password" required>
      </label>
      <br>
      <input type="submit" value="Login">
  </form>
  `;
}

// Registration Form
function registrationForm() {
  return `
  <form action="/register" method="POST">
      <label>
          Email address:<br>
          <input type="text" name="email" required>
      </label>
      <br>
      <label>
          Display name:<br>
          <input type="text" name="displayName" required>
      </label>
      <br>
      <label>
          Password:<br>
          <input type="password" name="password" required>
      </label>
      <br>
      <input type="submit" value="Register">
  </form>    
  </section>  `;
}

function logoutButton() {
  return `
    <form action='/logout' method='POST' class="logoutButton">
      <input type="submit" value="Logout">
    </form>
    
  `
}

function settingsLink() {
  return `<a href="/user/settings" id="settingsLink"> Settings</a>`;
}

function ourMission() {
  return `
  <div class="Mission">
  <h3>Purpose</h3>
  <p>
      Our goal is to create a platform for our users to track their mental wellness, thereby improving their awareness of themselves. We wanted to provide users with a visualization of their mental health over time, which will become more accurate the more the individual utilizes uMood.
  </p>
  </div>
  `;
}

// FUNCTIONS FOR USER HOME
function homePage(greeting, user) {
  return `
  <section class="summary">
  <h3>${greeting}</h3>

  <canvas id="line-chart" width="800" height="450" aria-label="Line Graph" role="img"></canvas>

  <a href="/${user}/questions"><button class="questionsButton">Questions</button></a>
  </section>
  <div class="Resources">
      <h3>Mental Health Resources</h3>
      <ul style="text-align: center">
          <li><a href="https://psychcentral.com/resources/" target="_blank">PsychCentral</a></li>
          <li><a href="https://www.psychiatry.org/patients-families" target="_blank">American Psychiatric Association</a></li>
          <li><a href="https://medlineplus.gov/mentalhealth.html" target="_blank">National Institutes of Health - National Library of Medicine</a></li>
          <li><a href="http://www.dsm5.org/Pages/Default.aspx" target="_blank">Diagnostic and Statistical Manual of Mental Disorders (DSM-5)</a></li>
      </ul>
  </div>
  `;
}

// FUNCTIONS FOR QUESTIONS
function questions(content) {
  return `
  <section class="questions">
  <p>  What difficulties did you have doing these things on a scale 0-4.<br>
  0 = No Difficulty<br>
  1 = Mild Difficulty<br>
  2 = Moderate Difficulty<br>
  3 = Severe Difficulty<br>
  4 = Extreme Difficulty or Cannot Do<br>
  based on WHODAS 36 Screen</p>
    <form method="post" action="/answers" class="questionsForm">
      ${content}
      <input type="submit" value="Submit">
    </form>
    </section>
  `;
}

function drawQues(question, quId) {
  return `
  <label>${question}</label>
  <select name=name${quId}>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  <select>`;
}


// THIS FUNCTION RETURNS THE ARRAY WITH ALL THE DATA FOR THE LAST WEEK
function gettingAnswers(user) {
  let promiseArray = [];
  for (let i = 1; i < 7; i++) {
    promiseArray.push(Answer.answerByQuestion(user.id, i))
  }
  return Promise.all(promiseArray)
    .then(answers => {
      return answers.map(week => {
        // return day;
        return week.map(day => {
          return { date: day.date, question: day.question_id, answer: day.answer }
        })
      })
    })
}

function loopThrough(array) {
  let newArray = []

  while (array.length < 7) {
    array.unshift({ answer: 0 })
  }
  for (object of array) {
    newArray.push(object.answer);
  }
  return newArray;
}


function sendData(answersArray) {
  let question1 = loopThrough(answersArray[0]);
  let question2 = loopThrough(answersArray[1]);
  let question3 = loopThrough(answersArray[2]);
  let question4 = loopThrough(answersArray[3]);
  let question5 = loopThrough(answersArray[4]);
  let question6 = loopThrough(answersArray[5]);

  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();

  let today = `${year}/${month}/${date}`;
  console.log(question1);

  return `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
  <script>
  new Chart(document.getElementById('line-chart'), {
    type: 'line',
    data: {
      labels: ['6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', '1 Day Ago', '${today}'],
      datasets: [{
        data: [${question1}],
        label: "Question 1",
        borderColor: "red",
        fill: false
      }, {
        data: [${question2}],
        label: "Question 2",
        borderColor: "blue",
        fill: false
      }, {
        data: [${question3}],
        label: "Question 3",
        borderColor: "green",
        fill: false
      }, {
        data: [${question4}],
        label: "Question 4",
        borderColor: "yellow",
        fill: false
      }, {
        data: [${question5}],
        label: "Question 5",
        borderColor: "orange",
        fill: false
      
      }, {
        data: [${question6}],
        label: "Question 6",
        borderColor: "purple",
        fill: false
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Last 7 days"
      }
    }
  });
  </script>`
}


module.exports = {
  header,
  drawQues,
  loginForm,
  settingsLink,
  registrationForm,
  ourMission,
  homePage,
  questions,
  gettingAnswers,
  sendData,
  footer
}