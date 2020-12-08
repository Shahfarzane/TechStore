let merchList = localStorage.getItem("itemsInCart")
if(merchList !=null){
    merchList = JSON.parse(merchList)
}
else {

}
for (let i = 0; i <merchList.length; i++)
{
    const merch = merchList[i]
    renderMerchCart(merch)
}

    function renderMerchCart(merch)
    {
        
        let inCart = document.getElementById("inCart")
/* "main container AKA hela kortet för varan"*/        
        let merchContainer = document.createElement("div")
        // merchContainer.style.display = "flex"
        // merchContainer.style.flexDirection = "column"
        // merchContainer.style.width = "400px"
        // merchContainer.style.padding = "10px"
        // merchContainer.style.justifyContent = "center"
        // merchContainer.style.alignItems = "center"
        // merchContainer.style.marginBottom = "20px"
        // merchContainer.style.border = "5px solid #5596F5"
        // merchContainer.style.justify = "space-around"
        // merchContainer.style.borderRadius = "20px"
        // merchContainer.style.backgroundColor = "#F5F5F5"
        merchContainer.className = "merchCard"
/* varans bildcontainer */
        let imgContainer = document.createElement("div")
        imgContainer.style.flex = "3 0 0px"
/* textrutans-styling och textcontainer*/
        let textContainer = document.createElement("div")
        textContainer.style.display = "flex"
        textContainer.style.flexDirection = "column"
        textContainer.style.flex = "1 0 0px"
        textContainer.style.justifyContent = "center"
        textContainer.style.alignItems = "center"
/* ta bort knapp och styling */
        let button = document.createElement("button")
        button.style.display = "flex"
        button.style.border = "none"
        button.style.borderRadius = "10px"
        button.style.width = "200px"
        button.style.height = "60px"
        button.style.color = "#F5F5F5"
        button.style.padding = "10px"
        button.style.backgroundColor = "#E64E4E"
        button.style.marginBottom = "20px"
        button.style.fontSize = "20px"
        button.style.justifyContent = "center"
        button.style.alignItems = "center"
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
        merchImg.style.height = "250px"
        merchImg.style.objectFit = "cover"
      
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