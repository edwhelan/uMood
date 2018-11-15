function header(content, isLoggedIn = false) {
  return `
    <header>
    ${
    isLoggedIn ? logoutButton() : none()
    }
    ${content}
    </header>
  `
}

function none() {
  return ``;
}
// Functions for ROOT

// Login Form
function loginForm() {
  return `
  <form action="/login" method="POST">
      <label>
          Email address:
          <input type="text" name="email">
      </label>
      <br>
      <label>
          Password:
          <input type="password" name="password">
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
          Email address:
          <input type="text" name="email">
      </label>
      <br>
      <label>
          Display name:
          <input type="text" name="displayName">
      </label>
      <br>
      <label>
          Password:
          <input type="password" name="password">
      </label>
      <br>
      <input type="submit" value="Register">
  </form>    
  `;
}

function logoutButton() {
  return `
    <form action='/logout' method='POST'>
      <input type="submit" value="Logout">
    </form>
  `
}

function ourMission() {
  return `
  <div class="Mission">
  <h3>Mission</h3>
  <p>
      Our goal is to create a platform for our users to track their mental wellness, thereby improving their awareness of themselves. We wanted to provide users with a visualization of their mental health over time, which will become more accurate the more the individual utilizes uMood.
  </p>
  </div>
  `;
}

// FUNCTIONS FOR USER HOME
function homePage(content, user) {
  return `
  ${content}
  <canvas id="line-chart" width="800" height="450"></canvas>
  <a href="/${user}/questions">Questions</a>
  <div class="Resources">
      <h3>Resources (will customize towards user over time)</h3>
      <p>
          <a href="#">Link 1</a> <br>
          <a href="#">Link 2</a> <br>
          <a href="#">Link 3</a> <br>
          <a href="#">Link 4</a> <br>
      </p>
  </div>
  `;
}

// FUNCTIONS FOR QUESTIONS
function questions(content) {
  return `
    <form method="post" action="/answers">
      ${content}
      <input type="submit" value="Submit">
    </form>
  `;
}

function drawQues(question, quId) {
  return `
  <label>${question}</label>
  <select name=name${quId}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  <select>`;
}


module.exports = {
  header,
  drawQues,
  loginForm,
  registrationForm,
  ourMission,
  homePage,
  questions
}