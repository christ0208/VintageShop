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

function validateNone(input){
    if(input.length<1) return false;

    return true;
}