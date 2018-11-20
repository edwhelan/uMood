//load form with preloaded information so they can change whatever they want
function settingsPage(email, name) {
  return `
  <section class="settings">
  <div class="setting">
    <h3>Update your personal information</h3>
    <form action="/user/settings" method="POST">
    <label>
        Email Address:<br>
        <input type="email" name="emailAddressText" value="${email}" required>
    </label>
    <br>
    <label>
        Display Name:<br>
        <input type="text" name="displayNameText" value="${name}" required>
    </label>
    <input type="submit" value="Update">
</form>
</div>
`
}

function changePassword() {
  return `
    <div class="setting">
      <h3>Change your password</h3>
      <form action="/password" method="POST">
        <label>
          Current Password:
        </label>
        <input type="password" placeholder="p455word" name="current" required>
        <label>
          New Password:
        </label>
        <input type="password" placeholder="p455word" name="newPass" required>
        <label>
          Confirm New Password:
        </label>
        <input type="password" placeholder="p455word" name="newPassCheck" required>
        <input type="submit" value="Change Password">
      </form>
    </div>
    </section>
  `
}
module.exports = {
  settingsPage,
  changePassword
}