function homeButtonClick(){
    window.location.href = "index.html";
}

function itemButtonClick(){
    console.log('item button');
}

function furnitureButtonClick(){
    console.log('furniture button');
}

function aboutButtonClick(){
    window.location.href = "about.html";
}

function registerButtonClick(){
    window.location.href = "register.html";
}

$('#home-button').click(homeButtonClick);
$('#item-button').click(itemButtonClick);
$('#furniture-button').click(furnitureButtonClick);
$('#about-button').click(aboutButtonClick);
$('#register-button').click(registerButtonClick);