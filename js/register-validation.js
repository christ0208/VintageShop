$('#registration-form').submit(submitForm);

function submitForm(e){
    e.preventDefault();
    let formdata = new FormData(e.target);
    let name = formdata.get("name");
    let email = formdata.get("email");
    let gender = formdata.get("gender");
    let type = formdata.get("member");
    let agree = formdata.get("agreement");
    if(notEmpty(name,email,gender,type,agree)){
        $('#error-message').text("");
        window.location.replace("index.html");
    }
}

function notEmpty(name,email,gender,type,agree){
    if(!validateNone(name)){
        $('#error-message').text("Name must be filled");
        return false;
    }
    else if(name.length < 5){
        $('#error-message').text("Name must be more than or equal 5 characters");
        return false;
    }
    else if(!validateAlphabetic(name)){
        $('#error-message').text("Name must be alphabetic");
        return false;
    }
    else if(!validateNone(email)){
        $('#error-message').text("Email must be filled");
        return false;
    }
    else if(!validateEmailFormat(email)){
        $('#error-message').text("Email must be in email format");
        return false;
    }
    else if(gender !== 'Male' && gender !== 'Female'){
        $('#error-message').text("Choose your gender");
        return false;
    }
    else if(type !== 'Standard' && type !== 'Extended'){
        $('#error-message').text("Choose your membership type");
        return false;
    }
    else if(agree !== "on"){
        $('#error-message').text("You have to agree to our terms and conditions");
        return false;
    }
    return true;
}
