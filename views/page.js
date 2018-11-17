const helper = require(`./helper`);

// Main Page View
function page(content) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF=8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css" rel="stylesheet">
        <link href="./stylesheets/index.css" rel="stylesheet">
      </head>
      <body>
        <header>
        </header>
        ${content}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
        <script src="./Chart.js tests/test.js"></script>
      </body>
    </html>
    `
}

module.exports = page;

//         ${headerContent}
// ${
  // isLoggedIn ? helper.logoutButton() : helper.loginOrRegister()
  // }