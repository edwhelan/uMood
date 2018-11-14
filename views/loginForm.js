function loginForm() {
    return `
    <form action="/login" method="POST">
        <label>
            Email address:
            <input type="text" name="email">
        </label>
        <br>
        <label>
            Display Name:
            <input type="text" name="displayName">
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

module.exports = loginForm;