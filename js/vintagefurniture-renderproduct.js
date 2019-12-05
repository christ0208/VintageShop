function renderCabinet(){
    renderItem(cabinets, document.getElementById("cabinets-slides"));
}

function renderDresser(){
    renderItem(dressers, document.getElementById("dressers-slides"));
}

function renderClock(){
    renderItem(clocks, document.getElementById("clocks-slides"));
}

function renderWardrobe(){
    renderItem(wardrobes, document.getElementById("wardrobes-slides"));
}

renderCabinet();
renderDresser();
renderClock();
renderWardrobe();