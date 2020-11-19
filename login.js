

var formDiv = document.createElement("div")
var form = document.createElement("form")
var emailLabel = document.createElement("label")
var formGroupDiv = document.createElement("div")
var inputEmail = document.createElement("input")
var passwordLabel = document.createElement("label")
var inputPassword = document.createElement("input")
var signInButton = document.createElement("button")
var header = document.getElementsByTagName("header")[0]
var userNameSpan = document.createElement("span")
var headerIcons = document.createElement("div")
var navbarUl = document.createElement("ul")
var navBarBrand = document.createElement("a")
var navbarItem = document.createElement("li")
var navBarLink = document.createElement("a")


form.className = "form"
formDiv.className = "form-access"
formGroupDiv.className = "form-group"
inputEmail.className = "form-control"
inputPassword.className = "form-control"
signInButton.className = "btn btn-success"
navBarBrand.className = "navbar-brand navBarTitle"
userNameSpan.className = " badge badge-secondary badge-success"
headerIcons.className = "headerIcons"
navbarUl.className = "navbar-nav"
navbarItem.className = "nav-item"
navBarLink.className = "nav-link"
navBarBrand.innerText = "TechStore"





emailLabel.innerText = "Email address"

inputEmail.id = "loginUsername"

passwordLabel.innerText = "Password"
inputPassword.id = "loginPassword"
inputPassword.type = "password"

signInButton.innerText = "Login"
signInButton.type = "button"
signInButton.addEventListener("click", login)

header.appendChild(navBarBrand)
header.appendChild(headerIcons)
formDiv.appendChild(form)
form.appendChild(formGroupDiv)
formGroupDiv.appendChild(emailLabel)
formGroupDiv.appendChild(inputEmail)
formGroupDiv.appendChild(passwordLabel)
formGroupDiv.appendChild(inputPassword)
form.appendChild(signInButton)

document.body.appendChild(formDiv)




function login() {

  var userNameInput = document.getElementById('loginUsername').value
  var passwordInput = document.getElementById('loginPassword').value
  if (!localStorage.getItem("usersDB")) {
    localStorage.setItem("usersDB", "[]");
  }
  var userStorage = JSON.parse(localStorage.getItem("usersDB"))


  for (var i = 0; i < userStorage.length; i++) {

    if (userNameInput == userStorage[i].username && passwordInput == userStorage[i].password) {
      var loginInformation = {
        username: userNameInput,
        password: passwordInput,
        items: userStorage[i].items
      }

      localStorage.setItem('loggedInUser', JSON.stringify(loginInformation))

      window.location = "dashboard.html"

    } else {
      alert('incorrect username or password')
      break;
    }
  }

  return false;
}