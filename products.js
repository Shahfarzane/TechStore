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
        let merchContainer = document.createElement("div")

        merchContainer.className = "merchCard"
        // let imgContainer = document.createElement("div")
        // imgContainer.style.flex = "3 0 0px"
        let textContainer = document.createElement("h2")
        // textContainer.style.display = "flex"
        // textContainer.style.flexDirection = "column"
        // textContainer.style.flex = "1 0 0px"
        // textContainer.style.justifyContent = "center"
        // textContainer.style.alignItems = "center"
        let deleteButton = document.createElement("button")
        deleteButton.className = "deleteButton btn-danger"

        deleteButton.innerHTML = '<i class="far fa-trash-alt">&emsp; Ta bort</i>'
        deleteButton.addEventListener
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


        let merchImg = document.createElement("img")
        merchImg.src = "./assets/" + merch.image
        merchImg.style.height = "250px"
        merchImg.style.objectFit = "cover"
      
        let merchTitle = document.createElement("h2")
        merchTitle.style.fontWeight = "550"
        merchTitle.innerText = merch.title
        let merchPrice = document.createElement("h4")
        merchPrice.style.fontWeight = "50"
        merchPrice.innerText = merch.price
        inCart.appendChild(merchContainer) 

        merchContainer.appendChild(imgContainer)
        merchContainer.appendChild(textContainer)

        textContainer.appendChild(merchImg)

        textContainer.appendChild(merchTitle)
        textContainer.appendChild(merchPrice)
        textContainer.appendChild(deleteButton)
    }
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