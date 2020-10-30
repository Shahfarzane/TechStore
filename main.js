var listOfProducts;

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
    console.log(listOfProducts);
 var container = document.createElement('div');
var itemCard = document.createElement('div');

    for (let i = 0; i < listOfProducts.length; i++) {
        const item = listOfProducts[i];

var purchaseButton = document.createElement('button');
var itemImage = document.createElement('img');
var itemName = document.createElement('h1');
var itemDescription = document.createElement('h5');
var itemPrice = document.createElement('h5');



purchaseButton.className= "btn btn-large btn-primary purchaseButton fas fa-cart-plus"
purchaseButton.innerText = " Lägg till i kundvagnen"
purchaseButton.onclick = function() {
    console.log("purchase button pressed")
  };
container.className = 'container text-center';
itemCard.className = "container-md"
itemImage.style.height = "50vh"
itemImage.style.width = "auto"

itemImage.src = "./assets/" + item.image
itemName.innerText = item.title
itemDescription.innerText = item.description
itemPrice.innerText = item.price +" "+"kr";




itemCard.appendChild(itemName)
itemCard.appendChild(itemDescription)
itemCard.appendChild(itemImage)
itemCard.appendChild(itemPrice)
itemCard.appendChild(purchaseButton)




        
    }
    document.body.appendChild(container);

    container.appendChild(itemCard)




}


