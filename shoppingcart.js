var total = 0
var products

var title = document.createElement("h2")
var container = document.createElement("div")
var orderTotal = document.createElement("p")
var purchaseButton = document.createElement("button")
var buttonSpanText = document.createElement('span')
var ButtonSpanIcon = document.createElement('span')

title.className = "fas fa-shopping-cart"
container.className = "container"
orderTotal.style.fontSize = "1em"
orderTotal.style.fontWeight = "bold"


title.innerText = "Kundvagn"

products = JSON.parse(localStorage.getItem("itemsInCart")) || []

for (var i = 0; i < products.length; i++) {
  var item = products[i]
  var itemCard = addProductsToWebpage(item)
  container.appendChild(itemCard)
  total += item.price
}

orderTotal.innerText = "Totalt pris: " + total + " " + "kr"


purchaseButton.appendChild(ButtonSpanIcon )
purchaseButton.appendChild(buttonSpanText)

ButtonSpanIcon .innerHTML = '<i class="fas fa-check"></i>'
buttonSpanText.innerText = " Slutför ditt köp "
purchaseButton.className = "purchaseButton btn-primary"
purchaseButton.addEventListener("click", function() {
    purchase()
})
document.body.appendChild(title)
document.body.appendChild(container)
document.body.appendChild(orderTotal)
document.body.appendChild(purchaseButton)


function addProductsToWebpage(item) {
  var itemCard = document.createElement("div")
  var itemImage = document.createElement("img")
  var itemName = document.createElement("h1")
  var itemPrice = document.createElement("h4")
  var deleteButton = document.createElement("button")
  var itemInfo = document.createElement("div")
  var buttonSpanText = document.createElement("span")
  var ButtonSpanIcon = document.createElement("span")

  itemCard.className = "itemCard"
  deleteButton.className = "deleteButton"
  itemImage.className = "itemImage"




  deleteButton.appendChild(ButtonSpanIcon);
  deleteButton.appendChild(buttonSpanText);

  itemName.innerText = item.title
  itemImage.setAttribute('src', "./assets/" + item.image)
  itemPrice.innerText = item.price + " " + "kr"

  ButtonSpanIcon.innerHTML = '<i class="far fa-trash-alt"></i>'
  buttonSpanText.innerText = "Ta bort"

  deleteButton.title = i;
  deleteButton.addEventListener("click", function() {
    deleteItem(this.title)
  })



  itemInfo.appendChild(itemImage)
  itemInfo.appendChild(itemName)
  itemInfo.appendChild(itemPrice)
  itemInfo.appendChild(deleteButton)
  itemCard.appendChild(itemInfo)

  return itemCard;
}



function deleteItem(title) {
    var addedToCart = JSON.parse(localStorage.getItem("itemsInCart"))
    var productName = title;
    addedToCart.splice(productName, 1)
    localStorage.setItem("itemsInCart", JSON.stringify(addedToCart)); 
    window.location.reload()
}

function purchase() {
  var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

  if (loggedInUser) {
    var storedUsers = JSON.parse(localStorage.getItem("usersDB"))
    for (var i = 0; i < storedUsers.length; i++) {
      if (loggedInUser.username == storedUsers[i].username) {
        loggedInUser.items.push(JSON.parse(localStorage.getItem("itemsInCart")))
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        storedUsers[i].items = loggedInUser.items
        localStorage.setItem("usersDB", JSON.stringify(storedUsers));
      }
    }
  } else {
    alert("You are not logged in , so your order wont be saved in user dashboard")
  }

  localStorage.removeItem("itemsInCart")
  alert("Done")
  window.location.reload()

};