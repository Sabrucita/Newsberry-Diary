//Utilicé en algunos casos expresiones regulares y en otros no para probar las distintas formas de resolver el ejercicio.
//Full Name Validation

let inputName = document.querySelector("#full-name");
inputName.addEventListener("blur",fullNameValidation);

function fullNameValidation(e) {
    const subsForm = e.target.value;
    if (subsForm==""){
        document.getElementsByClassName("error-txt")[0].innerHTML = "Full name is required";
    }else if(subsForm.length < 6){
        document.getElementsByClassName("error-txt")[0].innerHTML = "It's not a valid name it has less than 6 characters";
    }else if(subsForm.indexOf(" ")==(-1)){
        document.getElementsByClassName("error-txt")[0].innerHTML = "Check if you wrote name and last name or if it has a space between those two";
    }else{
        document.getElementsByClassName("error-txt")[0].innerHTML = "";
    }
}

//Focus
inputName.addEventListener("focus",focusValidation);

function focusValidation(e) {
    e.target.parentNode.children[2].innerHTML = "";
}

//Email Validation

let inputEmail = document.querySelector("#email");
inputEmail.addEventListener("blur",emailValidation);

function emailValidation(e) {
    const subsForm = e.target.value;
    const emailAt = subsForm.indexOf("@");
    if(emailAt>0){
        const textAfterAt = subsForm.substring(emailAt+1);
        const dotAfterAt = textAfterAt.indexOf(".");
        if(dotAfterAt>0){
            document.getElementsByClassName("error-txt")[1].innerHTML = "";
        }else{
            document.getElementsByClassName("error-txt")[1].innerHTML = "Invalid email format";
        }
    }else{
        document.getElementsByClassName("error-txt")[1].innerHTML = "Invalid email format";
    }
}

inputEmail.addEventListener("focus",focusValidation);

//Password Validation

let inputPassword = document.querySelector("#password");
inputPassword.addEventListener("blur",passwordValidation);

function passwordValidation(e) {
    const textInputPassword = inputPassword.value;
    if(textInputPassword.length >= 8){
        const re= /^(([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+))[0-9a-zA-Z]*$/
        letterAndNumberSearch= textInputPassword.search(re);
        if(letterAndNumberSearch == 0){
            document.getElementsByClassName("error-txt")[2].innerHTML = "";
        }else{
            document.getElementsByClassName("error-txt")[2].innerHTML = "Invalid password, it must have letters and numbers";
        }
    }else{
        document.getElementsByClassName("error-txt")[2].innerHTML = "Invalid password, it must have at least 8 characters";
    }
}

inputPassword.addEventListener("focus",focusValidation);
