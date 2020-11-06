var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun() {
  event.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "hidden";

  regTab.style.backgroundColor = "rgb(12, 132, 189)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function loginTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
  forgetBox.style.visibility = "hidden";

  loginTab.style.backgroundColor = "rgb(12, 132, 189)";
  regTab.style.backgroundColor = "rgba(11, 177, 224 0.82)";
}

function forTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "visible";

  regTab.style.backgroundColor = "rgna(11, 177, 224, 0.82)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function register() {
  event.preventDefault();

  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var passwordRetype = document.getElementById("rrp").value;
  console.log("användarnamn:" + email);
  console.log("lösenord" + password);

  if (email == "") {
    alert("email krävs.");
    return;
  } else if (password == "") {
    alert("Lösenord krävs.");
    return;
  } else if (passwordRetype == "") {
    alert("Lösenord krävs.");
    return;
  } else if (password != passwordRetype) {
    alert("Lösenord är inte samma som registerade");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(email + " Tack för registreringen, prova att logga in.");

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
  } else {
    alert(email + "is already registerd");
    return;
  }
}
function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("email krävs.");
      return;
    }
    alert("Använder exsisterar inte.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Lösenord krävs");
      return;
    }
    alert("Felaktigt lösenord");
    return;
  } else {
    alert(email + " Du är nu inloggad, Välkommen till Techstore");
    location.replace("navbarlogin.html");

    document.getElementById("se").value = "";
    document.getElementById("sp"), (value = "");
    return;
  }
}
