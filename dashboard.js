// var userInLocalStorage = localStorage.getItem("loggedInUser")

function initSite() {

  dashboardLoader()
  navBarCreator()

}

function dashboardLoader() {


  var welcomeText = document.createElement("p")
  var orderText = document.createElement("h4")
  var container = document.getElementById("container")

  var getUser = JSON.parse(localStorage.getItem("loggedInUser"))
  welcomeText.className = "badge badge-primary text-wrap navbar-text"
  orderText.className = "orderText"


  welcomeText.innerText = getUser.username + ", Welcome to the dashboard"
  orderText.innerText = " ORDERS"


  var loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"))
  loggedInUser=JSON.parse(localStorage.getItem('loggedInUser'))
  orders= loggedInUser.items

  var orderDiv = document.createElement("div")
  for (var j = 0; j < orders.length; j++) {
    var cardBody = document.createElement("div")
    cardBody.className = "card border-secondary mb-3 border-success"

    for (var i = 0; i < orders[j].length; i++) {
      var item = orders[j][i]

      var cardTitle = document.createElement("h6")
      var cardText = document.createElement("p")
      var cardDescription = document.createElement("p")
      var itemImage = document.createElement("img")
      var itemPrice = document.createElement("h6")

      cardTitle.className = "card-title"
      cardDescription.className = "card-text"
      cardText.className = "card-text"
      itemImage.className = "card-img-top"
      itemImage.style.width = "10vh"

      cardTitle.innerText = item.title
      cardDescription.innerText = item.description
      itemImage.setAttribute('src', "./assets/" + item.image)
      itemPrice.innerText = item.price + " " + "kr";
      cardBody.appendChild(itemImage)
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardDescription)
      cardBody.appendChild(itemPrice)
      orderDiv.appendChild(cardBody)

    }

  }
  container.appendChild(orderText)
  container.appendChild(orderDiv)

}





function navBarCreator() {
  var header = document.getElementsByTagName("header")[0]
  var userNameSpan = document.createElement("span")
  var headerIcons = document.createElement("div")
  var navbarUl = document.createElement("ul")
  var navBarBrand = document.createElement("a")
  var navbarItem = document.createElement("li")
  var navBarLink = document.createElement("a")

  var getUser = JSON.parse(localStorage.getItem("loggedInUser"))

  userNameSpan.style.margin = "10px"

  navBarBrand.className = "navbar-brand navBarTitle"
  userNameSpan.className = " badge badge-secondary badge-success"
  headerIcons.className = "headerIcons"
  navbarUl.className = "navbar-nav"
  navbarItem.className = "nav-item"
  navBarLink.className = "nav-link"


  navBarBrand.innerText = "TechStore"
  userNameSpan.innerText = " Logged in as: " + getUser.username

  var logOutButton = document.createElement("button")
  if (localStorage.getItem("loggedInUser")) {
    logOutButton.className = 'fas fa-sign-out-alt btn-danger'
  }

  logOutButton.addEventListener('click', function(e){

    e.preventDefault()
    localStorage.removeItem('loggedInUser');
    window.location = "index.html"
  
  })

  headerIcons.appendChild(userNameSpan)
  headerIcons.appendChild(logOutButton)
  header.appendChild(navBarBrand)
  header.appendChild(headerIcons)

}

