let merchList = [
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
        title: " Samsung Galaxy s8 ",
        imageUrl: "/media/SamsungS8.png",
        pris: "7990 kr"
    },

    {
        title: "LG V30",
        imageUrl:"/media/LGV30.png",
        pris: "7495 kr"
    }
]

for (let i = 0; i < merchList.length; i++) {
    const merch = merchList[i]

    renderMerchCart(merch)
}

function renderMerchCart(merch) {


    let body = document.body


    let merchContainer = document.createElement("div")
    merchContainer.style.display = "flex"
    merchContainer.style.flexDirection = "column"
    merchContainer.style.margin = "100px"
    merchContainer.style.width = "300px"
    merchContainer.style.border = "3px solid #5596F5"
    merchContainer.style.borderRadius = "20px"
    merchContainer.style.backgroundColor = "#F5F5F5"

    let imgContainer = document.createElement("div")
    imgContainer.style.flex = "2"

    let textContainer = document.createElement("div")
    textContainer.style.display = "flex"
    textContainer.style.flexDirection = "column"
    textContainer.style.flex = "1"
    textContainer.style.justifyContent = "center"
    textContainer.style.alignItems = "center"

    let button = document.createElement("button")
    button.style.border = "none"
    button.style.borderRadius = "10px"
    button.style.width = "200px"
    button.style.height = "60px"
    button.style.color = "#F5F5F5"
    button.style.padding = "10px"
    button.style.cursor = "pointer"
    button.style.backgroundColor = "#E64E4E"
    button.style.marginBottom = "20px"
    button.style.fontSize = "28px"
    button.innerHTML = '<i class="far fa-trash-alt">&emsp; Ta bort</i>'

    let merchImg = document.createElement("img")
    merchImg.src =merch.imageUrl
    merchImg.style.height = "100%"
    merchImg.style.width = "100%"

    let cartTitle = document.createElement("h1")
    cartTitle.style.fontWeight = "1000"
    cartTitle.innerText = merch.title

    let cartPrice = document.createElement("h4")
    cartPrice.style.fontWeight = "550"
    cartPrice.innerText = merch.pris
    
    body.appendChild(merchContainer)

    merchContainer.appendChild(imgContainer)
    merchContainer.appendChild(textContainer)

    imgContainer.appendChild(merchImg)

    textContainer.appendChild(cartTitle)
    textContainer.appendChild(cartPrice)
    textContainer.appendChild(button)

    

 

    
    
}