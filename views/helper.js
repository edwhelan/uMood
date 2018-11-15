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

module.exports = {
  header,
  loginForm,
  registrationForm,
  ourMission
}