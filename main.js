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
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.

    // TODO: Remove the console.log and these comments when you've read them.
}


let productList =[
    {
title: "iPhone",
price: "13000",
description: "something here",
imageUrl: "/Project/LGV30.png"

},{
title: "LgV3",
price: "7490",
description: "something here",
imageUrl: "/Project/LGV30.png"

},{
    title: "LgV3",
    price: "7490",
    description: "something here",
    imageUrl: "/Project/LGV30.png"

    }
    ,{
        title: "LgV3",
        price: "7490",
        description: "something here",
        imageUrl: "/Project/LGV30.png"

        }

]

for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    renderItem(product)

}

function renderItem (product){

var div = document.createElement('div');
var secondDiv = document.createElement('div');
var thirdDiv = document.createElement('div');
var buttons = document.createElement('button');
var phoneImage = document.createElement('img');
var phoneName = document.createElement('h1');
var phoneDescription = document.createElement('h5');
var phonePrice = document.createElement('h5');



buttons.className= "btn btn-primary fas fa-cart-plus"
buttons.innerText = " Click to add to cart"
div.className = 'container text-center';
secondDiv.className = "container-md"
thirdDiv.className = "container-sm"
phoneImage.style.height = "50vh"
phoneImage.style.width = "auto"
phoneImage.src = product.imageUrl
phoneName.innerText = product.title
phoneDescription.innerText = product.description
phonePrice.innerText = product.price




secondDiv.appendChild(phoneName)
secondDiv.appendChild(phoneDescription)
secondDiv.appendChild(phoneImage)
secondDiv.appendChild(phonePrice)
secondDiv.appendChild(buttons)






document.body.appendChild(div);
div.appendChild(secondDiv)
}
