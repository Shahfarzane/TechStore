let merchList = localStorage.getItem("itemsInCart")
if(merchList !=null){
    merchList = JSON.parse(merchList)
}
else {

}
let sumMerch = 0;

for (let i = 0; i <merchList.length; i++)
{
    const merch = merchList[i]
    renderMerchCart(merch)
    sumMerch = merch.price + sumMerch
}
    function renderMerchCart(merch)
    {
        
        let inCart = document.getElementById("inCart")
/* "main container AKA hela kortet för varan"*/        
        let merchContainer = document.createElement("div")
        merchContainer.className = "merchCard"
/* varans bildcontainer */
        let imgContainer = document.createElement("div")
        imgContainer.style.flex = "3 0 0px"
/* textrutans-styling och textcontainer*/
        let textContainer = document.createElement("div")
        textContainer.className ="txtCard"
/* ta bort knapp och styling */
        let button = document.createElement("button")
        button.className ="removeBtn"
        button.innerHTML = '<i class="far fa-trash-alt">&emsp; Ta bort</i>'
/* ta bort varor från kundvagnen */
        button.addEventListener
        ("click", 
            function(item) 
            {
                var addedToCart = JSON.parse(localStorage.getItem("itemsInCart"))
                addedToCart.splice(item, 1)
                for(var i=0;i<addedToCart.length;i++)
                {
                addedToCart[i].description = i;
                }
                localStorage.setItem("itemsInCart", JSON.stringify(addedToCart)); 
                window.location.reload()
            }
        ) 
/* styling och import av varans bild */        
        let merchImg = document.createElement("img")
        merchImg.src = "./assets/" + merch.image
        merchImg.className ="merchImage"
      
/* styling för titeln av varan */
        let merchTitle = document.createElement("h2")
        merchTitle.style.fontWeight = "550"
        merchTitle.innerText = merch.title
/* styling för priset av varan */
        let merchPrice = document.createElement("h4")
        merchPrice.style.fontWeight = "50"
        merchPrice.innerText = merch.price
/* postitionering av divar */ 
        inCart.appendChild(merchContainer) 

        merchContainer.appendChild(imgContainer)
        merchContainer.appendChild(textContainer)

        imgContainer.appendChild(merchImg)

        textContainer.appendChild(merchTitle)
        textContainer.appendChild(merchPrice)
        textContainer.appendChild(button)
    }
/* Tömma kundvagnen med hjälp av tömma knappen*/
var blueCartbtn = document.getElementById("blueCartbtn");
blueCartbtn.addEventListener
("click",
    function()
    {
        confirm("Slutför ditt köp");
        localStorage.clear();
        location.reload();
    }
);
document.getElementById("cartSum").innerHTML = sumMerch;