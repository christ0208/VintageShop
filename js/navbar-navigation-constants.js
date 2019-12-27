const redirection = {
    "home-button": "index.html",
    "item-button": "vintageitem.html",
    "furniture-button": "vintagefurniture.html",
    "about-button": "about.html",
    "register-button": "register.html",
    "book-button": "vintageitem.html#books",
    "gramophone-button": "vintageitem.html#gramophones",
    "radio-button": "vintageitem.html#radios",
    "cabinet-button": "vintagefurniture.html#cabinets",
    "dresser-button": "vintagefurniture.html#dressers",
    "clock-button": "vintagefurniture.html#clocks",
    "wardrobe-button": "vintagefurniture.html#wardrobes",
    "home-button-alt": "index.html",
    "item-button-alt": "vintageitem.html",
    "furniture-button-alt": "vintagefurniture.html",
    "about-button-alt": "about.html",
    "register-button-alt": "register.html"
}

function changePage(e){
    window.location.href = redirection[e.currentTarget.id];
}