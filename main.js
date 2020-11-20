var listOfProducts;
var itemsInLocalStorage = localStorage.getItem("itemsInCart")

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
}

function addProductsToWebpage() {

    var main = document.getElementsByTagName("main")[0]
    // main.className = "mains"
    // main.style.height = "100%"
    // main.style.marginTop = "15vh";
    // main.style.textAlign = "center"



    var container = document.createElement('div');
    container.className = "container"
    

    for (let i = 0; i < listOfProducts.length; i++) {
        var item = listOfProducts[i];



var itemCard = document.createElement('div');
var purchaseButton = document.createElement('button');
var itemImage = document.createElement('img');
var itemName = document.createElement('h2');
var itemDescription = document.createElement('h6');
var itemPrice = document.createElement('h6');
var itemInfo = document.createElement('div')
var buttonSpanText = document.createElement('span')
var ButtonSpanIcon = document.createElement('span')



purchaseButton.className= "btn btn-large btn-primary purchaseButton "
purchaseButton.appendChild(ButtonSpanIcon)

purchaseButton.appendChild(buttonSpanText)
ButtonSpanIcon.innerHTML = '<i class="fas fa-cart-plus"></i>'

buttonSpanText.innerText = " Lägg till i kundvagnen"


purchaseButton.data = item
purchaseButton.addEventListener("click", function() {
    addItemToLocalStorage(this.data)
})
    
itemCard.className = "item-card"
itemImage.style.height = "50vh"
itemImage.style.width = "auto"

itemImage.src = "./assets/" + item.image
itemName.innerText = item.title
itemDescription.innerText = item.description
itemPrice.innerText = item.price +" "+"kr";


itemInfo.appendChild(itemName)
itemInfo.appendChild(itemDescription)
itemInfo.appendChild(itemImage)
itemInfo.appendChild(itemPrice)
itemInfo.appendChild(purchaseButton)

itemCard.appendChild(itemInfo)
container.appendChild(itemCard)
 main.appendChild(container)

}


}

function addItemToLocalStorage(item){

    if (!localStorage.getItem("itemsInCart")) {

        localStorage.setItem("itemsInCart", "[]");
    }

    var addedToCart = JSON.parse(localStorage.getItem("itemsInCart"))
    var phone = item;
    addedToCart.push(phone)
    localStorage.setItem("itemsInCart", JSON.stringify(addedToCart));
    document.getElementById("count").innerText = addedToCart.length

}
