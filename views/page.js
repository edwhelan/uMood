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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        <link href="../stylesheets/index.css" rel="stylesheet" type="text/css">
        </head>
      <body>
        ${content}
        <footer>
        <h5>Built by:<br></h5>
          <ul class="social-links">
            <li>Ed Whelan
              <ul class="icons">
                <li><a href=#><i class="fas fa-envelope-square"></i></a></li>
                <li><a href=#><i class="fab fa-linkedin"></i></a></li>
                <li><a href=#><i class="fab fa-github"></i></a></li>

              </ul>
            </li>
            <li>Lorenzo Salvio
            <ul class="icons">
            <li><a href=#><i class="fas fa-envelope-square"></i></a></li>
            <li><a href=#><i class="fab fa-linkedin"></i></a></li>
            <li><a href=#><i class="fab fa-github"></i></a></li>

          </ul></li>
            <li>Sam Erickson
            <ul class="icons">
            <li><a href=#><i class="fas fa-envelope-square"></i></a></li>
            <li><a href=#><i class="fab fa-linkedin"></i></a></li>
            <li><a href=#><i class="fab fa-github"></i></a></li>

          </ul></li>
          </ul>

        </footer>
        

        <script src="../scripts/index.js"></script>
      </body>
      
    </html>
    `
}

module.exports = page;

//         ${headerContent}
// ${
  // isLoggedIn ? helper.logoutButton() : helper.loginOrRegister()
  // }