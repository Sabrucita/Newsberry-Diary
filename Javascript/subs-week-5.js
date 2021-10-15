//Full Name Validation


let inputName = document.querySelector("#full-name");
inputName.addEventListener("blur",fullNameValidation);

function fullNameValidation(e) {
    const subsForm = e.target.value;
    if (subsForm==""){
        alert("Full name is required");
    }else if(subsForm.length < 6){
        alert("It's not a valid name it has less than 6 characters");
    }else if(subsForm.indexOf(" ")==(-1)){
        alert("There's no space between the name and last name");
    }
}