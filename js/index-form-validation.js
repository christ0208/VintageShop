$('#form-contact-us').submit(submitForm);

function submitForm(e){
    e.preventDefault();

    let formdata = new FormData(e.target);
    let name = formdata.get("name");
    let number = formdata.get("number");
    let email = formdata.get("email");
    let message = formdata.get("message");

    if(name.length < 5){
        $('#error-message').text("Name must be more than or equal 5 characters");
    }
    else if(number.length < 10 || number.length > 12){
        $('#error-message').text("Number must be between 10-12 characters");
    }
    else if(!validateEmailFormat(email)){
        $('#error-message').text("Email must be in email format");
    }
    else {
        $('#error-message').text("");
    }
}

function validateEmailFormat(email){
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1) return false;
    else if(email.lastIndexOf(".") - email.indexOf("@") < 2) return false;

    return true;
}