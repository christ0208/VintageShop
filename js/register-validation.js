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
        if(validateEmail(email)){
            $('#error-message').text("");
        }
}
}



function notEmpty(name,email,gender,type,agree){
    if(!validateNone(name)){
        $('#error-message').text("Name must be filled");
        return false;
    }
    else if(!validateNone(email)){
        $('#error-message').text("Email must be filled");
        return false;
    }
    else if(gender!="on"){
            $('#error-message').text("Choose your gender");
            return false;
        
    }
    else if(!validateNone(type)){
        $('#error-message').text("Choose your membership type");
        return false;
    }
    else if(agree!="on"){
        $('#error-message').text("You have to agree to our terms and conditions");
        return false;
    }
    return true;
}
function validateNone(input){
    if(input.length<1){
        isValidated  = false;        
        return false;
    }

    return true;
}

function validateEmail(email){
    let spchar = ['.','@'];
    var i;
    if (email.length<1){
        $('#error-message').text("Email must be filled");
        return false;
    }
    for(i=0;i<spchar.length;i++){
        if(email.indexOf(spchar[i])===-1){
            $('#error-message').text("Email must follow email format");
            return false;
        }
        else if(email.startsWith(spchar[i]) || email.endsWith(spchar[i]))
        {
            $('#error-message').text("Email must follow email format");
            return false;
        }
    }
    if(email.lastIndexOf(".")-email.lastIndexOf("@")<2){
        $('#error-message').text("Email must follow email format");
        return false;
    }
    return true;
}
