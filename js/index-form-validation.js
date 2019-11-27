$('#form-contact-us').submit(submitForm);

function submitForm(e){
    e.preventDefault();

    let isValidated = true;
    let formdata = new FormData(e.target);
    let name = formdata.get("name");
    let number = formdata.get("number");
    let email = formdata.get("email");
    let message = formdata.get("message");

    if(name.length < 5){
        $('#error-message').text("Name must be more than or equal 5 characters");
        isValidated = false;
    }
    else if(!validateAlphabetic(name)){
        $('#error-message').text("Name must be alphabetic");
        isValidated = false;
    }
    else if(number.length < 10 || number.length > 12){
        $('#error-message').text("Number must be between 10-12 characters");
        isValidated = false;
    }
    else if(!validateNumeric(number)){
        $('#error-message').text("Number must be numeric");
        isValidated = false;
    }
    else if(!validateEmailFormat(email)){
        $('#error-message').text("Email must be in email format");
        isValidated = false;
    }
    else if(message.length <= 0){
        $('#error-message').text("Message must be filled");
        isValidated = false;
    }
    else {
        $('#error-message').text("");
    }

    showErrorMessage(isValidated);
}

function validateAlphabetic(input){
    let length = input.length;
    for(let i = 0; i < length; i++){
        if(input.charCodeAt(i) >= 'A'.charCodeAt(0) && input.charCodeAt(i) <= 'Z'.charCodeAt(0)) continue;
        else if (input.charCodeAt(i) >= 'a'.charCodeAt(0) && input.charCodeAt(i) <= 'z'.charCodeAt(0)) continue;
        else return false;
    }

    return true;
}

function validateNumeric(input){
    let length = input.length;
    for(let i = 0; i <  length; i++){
        if(input.charCodeAt(i) < '0'.charCodeAt(0) || input.charCodeAt(i) > '9'.charCodeAt(0)) return false;
    }

    return true;
}

function validateEmailFormat(email){
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1) return false;
    else if(email.startsWith("@") || email.endsWith("@")) return false;
    else if(email.startsWith(".") || email.endsWith(".")) return false;
    else if(email.lastIndexOf(".") - email.indexOf("@") < 2) return false;

    return true;
}

function showErrorMessage(isValidated){
    if(isValidated){
        $('#error-message').hide();
        openModal();
    }
    else {
        $('#error-message').show();
    }
}