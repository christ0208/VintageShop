$('#form-contact-us').submit(submitForm);

function submitForm(e){
    e.preventDefault();

    let isValidated = true;
    let formData = new FormData(e.target);
    let name = formData.get("name");
    let number = formData.get("number");
    let email = formData.get("email");
    let message = formData.get("message");

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

function showErrorMessage(isValidated){
    if(isValidated){
        $('#error-message').hide();
        openModal();
    }
    else {
        $('#error-message').show();
    }
}