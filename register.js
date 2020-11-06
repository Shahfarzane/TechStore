var formDiv = document.createElement("div")
var form = document.createElement("form")
var emailLabel = document.createElement("label")
var formGroupDiv = document.createElement("div")
var inputEmail = document.createElement("input")
var passwordLabel = document.createElement("label")
var inputPassword = document.createElement("input")
var signUpButton = document.createElement("button")

form.className = "form"
formDiv.className = "form-access"
formGroupDiv.className = "form-group"
inputEmail.className = "form-control"
inputPassword.className = "form-control"
signUpButton.className = "btn btn-danger"

emailLabel.innerText = "Email address"
inputEmail.id = "newUsername"

passwordLabel.innerText = "Password"
inputPassword.id = "newPassword"
inputPassword.type = "password"

signUpButton.innerText = "Register"
signUpButton.type = "reset"
signUpButton.addEventListener("click",register)


formDiv.appendChild(form)
form.appendChild(formGroupDiv)
formGroupDiv.appendChild(emailLabel)
formGroupDiv.appendChild(inputEmail)
formGroupDiv.appendChild(passwordLabel)
formGroupDiv.appendChild(inputPassword)
form.appendChild(signUpButton)

document.body.appendChild(formDiv)



function register() {
    
        var userNameInput = document.getElementById('newUsername').value
        var passwordInput = document.getElementById('newPassword').value
        if (!localStorage.getItem("usersDB")) {
          localStorage.setItem("usersDB", "[]");
        }
        var userStorage = JSON.parse(localStorage.getItem("usersDB"))
      
        var newUser = {
          username: userNameInput,
          password: passwordInput,
          items: [] 
        }
        var i=0

        
            if (i == userStorage.length){
              userStorage.push(newUser)
              localStorage.setItem('loggedInUser',JSON.stringify(newUser))
              localStorage.setItem('usersDB', JSON.stringify(userStorage)); 
              window.location = "index.html"
            }
          
        return false;
      }