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

module.exports = registrationForm;