/* let merchList = [
    {
        title: "iPhone X",
        imageUrl: "/media/iPhoneX.png",
        pris: "11495 kr"
    },

    {
        title: "One Plus 5",
        imageUrl: "/media/OnePlus5.png",
        pris: "4995 kr"
    },

    {
        title: "Galaxy S8 ",
        imageUrl: "/media/SamsungS8.png",
        pris: "7990 kr"
    },

    {
        title: "LG V30",
        imageUrl:"/media/LGV30.png",
        pris: "7495 kr"
    }
]
 */

let merchList = localStorage.getItem("itemsInCart")
merchList = JSON.parse(merchList)

for (let i = 0; i <merchList.length; i++) {
    const merch = merchList[i]
    renderMerchCart(merch)
}

function renderMerchCart(merch) {

    let inCart = document.getElementById("inCart")

    let merchContainer = document.createElement("div")
    merchContainer.style.display = "flex"
    merchContainer.style.flexDirection = "column"
    merchContainer.style.width = "300px"
    merchContainer.style.border = "5px solid #5596F5"
    merchContainer.style.justify = "space-around"
    merchContainer.style.borderRadius = "20px"
    merchContainer.style.backgroundColor = "#F5F5F5"

    let imgContainer = document.createElement("div")
    imgContainer.style.flex = "6 0 0px"
    
    let textContainer = document.createElement("div")
    textContainer.style.display = "flex"
    textContainer.style.flexDirection = "column"
    textContainer.style.flex = "1 0 0px"
    textContainer.style.justifyContent = "center"
    textContainer.style.alignItems = "center"   

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
    button.style.fontSize = "28px"
    button.style.justifyContent = "center"
    button.style.alignItems = "center"
    button.innerHTML = '<i class="far fa-trash-alt">&emsp; Ta bort</i>'

    let merchImg = document.createElement("img")
    merchImg.src = "./assets/" + merch.image
    merchImg.style.height = "50vh"
    merchImg.style.width = "auto"

    let merchTitle = document.createElement("h1")
    merchTitle.style.fontWeight = "1000"
    merchTitle.innerText = merch.title

    let merchPrice = document.createElement("h6")
    // merchPrice.style.fontWeight = "550"
    merchPrice.innerText = merch.price
    
    inCart.appendChild(merchContainer) 

    merchContainer.appendChild(imgContainer)
    merchContainer.appendChild(textContainer)

    imgContainer.appendChild(merchImg)

    textContainer.appendChild(merchTitle)
    textContainer.appendChild(merchPrice)
    textContainer.appendChild(button)
}
function blueCartBtn () {
    alert("Du slutför nu ditt köp");
}