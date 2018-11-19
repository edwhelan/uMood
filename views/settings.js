//load form with preloaded information so they can change whatever they want
function settingsPage(email, name) {
  return `
<div class="setting">
<h3>Update your personal information</h3>
<form action="/user/settings" method="POST">
    <label>
        Email Address:
        <input type="text" name="emailAddressText" value="${email}">
    </label>
    <br>
    <label>
        Display Name:
        <input type="text" name="displayNameText" value="${name}">
    </label>
    <input type="submit" value="Update">
</form>
</div>
`
}
module.exports = settingsPage