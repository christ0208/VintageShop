const redirection = {
    "home-button": "index.html",
    "item-button": "vintageitem.html",
    "furniture-button": "vintagefurniture.html",
    "about-button": "about.html",
    "register-button": "register.html",
    "book-button": "vintageitem.html",
    "gramophone-button": "vintageitem.html",
    "radio-button": "vintageitem.html",
    "cabinet-button": "vintagefurniture.html",
    "dresser-button": "vintagefurniture.html",
    "clock-button": "vintagefurniture.html",
    "wardrobe-button": "vintagefurniture.html"
}

function changePage(e){
    window.location.href = redirection[e.currentTarget.id];
}