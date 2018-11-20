function registrationForm() {
    return `
    <form action="/register" method="POST">
        <label>
            Email address:
            <input type="text" name="email" required>
        </label>
        <br>
        <label>
            Display name:
            <input type="text" name="displayName" required>
        </label>
        <br>
        <label>
            Password:
            <input type="password" name="password" required>
        </label>
        <br>
        <input type="submit" value="Register">
    </form>    
    `;
}

module.exports = registrationForm;