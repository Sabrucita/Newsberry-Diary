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

//Confirm Password Validation

let inputConfirmPassword = document.querySelector("#confirm_password");
inputConfirmPassword.addEventListener("blur",confirmPasswordValidation);

function confirmPasswordValidation(e) {
	const textInputConfirmPassword = inputConfirmPassword.value;
	if(textInputConfirmPassword === inputPassword.value){
		document.getElementsByClassName("error-txt")[3].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[3].innerHTML = "Invalid password, it's not equal to the password";
	}

inputConfirmPassword.addEventListener("focus",focusValidation);
}

//Age Validation

let inputAge = document.querySelector("#age");
inputAge.addEventListener("blur",ageValidation);

function ageValidation() {
	ageValue= parseFloat(inputAge.value);
	if (Number.isInteger(ageValue)==true && ageValue>=18){
		document.getElementsByClassName("error-txt")[4].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[4].innerHTML = "You must be over 18 years to subscribe or check to write an integer number as an age";
	}
}
inputAge.addEventListener("focus",focusValidation);

// Phone number Validation

let inputPhoneNumber = document.querySelector("#phone");
inputPhoneNumber.addEventListener("blur",phoneNumberValidation);


function phoneNumberValidation() {
	valuePhoneNumber= inputPhoneNumber.value;
	const re= /^([0-9])*$/
	numberSearch= valuePhoneNumber.match(re);
	if(numberSearch != null && numberSearch[0].length >= 7){
		document.getElementsByClassName("error-txt")[5].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[5].innerHTML = "Phone number ivalid, it must have 7 or more numbers or it must not have letters or signs";
	}
}

inputPhoneNumber.addEventListener("focus",focusValidation);

//Address Validation

let inputAddress = document.querySelector("#address");
inputAddress.addEventListener("blur",addressValidation);

function addressValidation() {
	valueAddress= inputAddress.value;
	const re= /^(([a-zA-Z]+[\s0-9]+)|([0-9]+[\sa-zA-Z]+))[0-9\sa-zA-Z]*$/
	searchInput = valueAddress.match(re);
	if(searchInput != null && searchInput[0].length >= 5){
		if(searchInput[0].indexOf(" ")>0 && searchInput[0].indexOf(" ") < searchInput[0].length-1){
			document.getElementsByClassName("error-txt")[6].innerHTML = "";
		}else{
			document.getElementsByClassName("error-txt")[6].innerHTML = "Invalid Address";
		}
	}else{
		document.getElementsByClassName("error-txt")[6].innerHTML = "Invalid Address";
	}
}

inputAddress.addEventListener("focus",focusValidation);

//City Validation

let inputCity = document.querySelector("#city");
inputCity.addEventListener("blur",cityValidation);

function cityValidation() {
	valueCity = inputCity.value;
	const re = /^([a-zA-Z\s])*$/
	matchInput = valueCity.match(re);
	if (matchInput != null && matchInput[0].length >= 3){
		document.getElementsByClassName("error-txt")[7].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[7].innerHTML = "Invalid City";
	}
}
inputCity.addEventListener("focus",focusValidation);

//Postal Code Validation

let inputPostalCode = document.querySelector("#postal-code");
inputPostalCode.addEventListener("blur",postalCodeValidation);

function postalCodeValidation() {
	valuePostalCode = inputPostalCode.value;
	const re = /^([0-9a-zA-Z])*$/
	matchInput = valuePostalCode.match(re);
	if (matchInput != null && matchInput[0].length >= 3){
		document.getElementsByClassName("error-txt")[8].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[8].innerHTML = "Invalid Postal Code";
	}
}
inputPostalCode.addEventListener("focus",focusValidation);

//DNI Validations

let inputDni = document.querySelector("#dni");
inputDni.addEventListener("blur",dniValidation);

function dniValidation() {
	valueDni = inputDni.value;
	const re = /^([0-9])*$/
	matchInput = valueDni.match(re);
	if (matchInput != null && matchInput[0].length <= 8 && matchInput[0].length >= 7){
		document.getElementsByClassName("error-txt")[9].innerHTML = "";
	}else{
		document.getElementsByClassName("error-txt")[9].innerHTML = "Invalid DNI";
	}
}
inputDni.addEventListener("focus",focusValidation);

let formSubs = document.querySelector("#subs-form");

function correctFormMessage(e) {
	/*let result = "";
	for (let i = 0; i < formSubs.length-1; i++) {
		result += formSubs[i].value + "\n";
	}
	alert("THE DATA YOU WANT TO SEND IS THE FOLLOWING"+result);*/
	sendForm();
}

formSubs.addEventListener("submit",errorFormMessage);

function errorFormMessage(e) {
	e.preventDefault();
	const errorText = document.getElementsByClassName("error-txt");
	console.log(errorText)
	let errorResult = "";
	for (let i = 0; i < errorText.length; i++) {
		const element = errorText[i].textContent;
		if(element != ""){
			errorResult += element + "\n";
		}
	}

	if(errorResult == ""){
		correctFormMessage();
	}else{
		modalMessage(errorResult,"The errors were the following");
	}
}

const formTitle = document.querySelector("#h2-text");
inputName.addEventListener("keyup",realTimeText);

formTitleContent = formTitle.textContent;

function realTimeText() {
	formTitle.innerHTML = formTitleContent + inputName.value;
}

//
//
//WEEKLY PROBLEM 06

const url = "https://curso-dev-2021.herokuapp.com/newsletter?";

function makeFullUri() {
	let urlParams = "";
	const fullNameValue = inputName.value;
	const emailValue = inputEmail.value;
	const passwordValue = inputPassword.value;
	const confirmPasswordValue = inputConfirmPassword.value;
	const ageValue = inputAge.value;
	const phoneNumberValue = inputPhoneNumber.value;
	const addressValue = inputAddress.value;
	const cityValue = inputCity.value;
	const postalCodeValue = inputPostalCode.value;
	const dniValue = inputDni.value;

	urlParams +=
		"name="+fullNameValue+
		"&email="+emailValue+
		"&password="+passwordValue+
		"&confirm_password="+confirmPasswordValue+
		"&age="+ageValue+
		"&phone_number="+phoneNumberValue+
		"&address="+addressValue+
		"&city="+cityValue+
		"&postal_code="+postalCodeValue+
		"&dni="+dniValue;

	return encodeURI (url+urlParams);
}

function sendForm(){
	fetch(makeFullUri())
		.then(function (response){
			return response.json();
		})
		.then(function(data){
			createSuccessMessage(data);
			localStorage.setItem("user_data",JSON.stringify(data))
		})
		.catch(function(err) {
			//console.log("The error is:",err);
			modalMessage(err, "The subscription failed.")
		})
}


function createSuccessMessage(values) {
	const stringData=
	"<p>Name: "+values.name+"</p>"+
	"<p>Email: "+values.email+"</p>"+
	"<p>Password: "+values.password+"</p>"+
	"<p>Confirm Password: "+values.confirm_password+"</p>"+
	"<p>Age: "+values.age+"</p>"+
	"<p>Phone Number: "+values.phone_number+"</p>"+
	"<p>Address: "+values.address+"</p>"+
	"<p>City: "+values.city+"</p>"+
	"<p>Postal Code: "+values.postal_code+"</p>"+
	"<p>Dni: "+values.dni+"</p>";
	modalMessage(stringData, "You've been subscribed to our newsletter");
}

const modalCloseButton = document.querySelector(".modal-button")
	modalCloseButton.addEventListener("click", function(){
		document.querySelector(".modal-container").classList.add("invisible")
	})

function modalMessage(message,titlemessage) {

	document.getElementById("modal-message").innerHTML= message
	document.getElementById("modal-title").innerHTML= titlemessage
	document.querySelector(".modal-container").classList.remove("invisible")
}

window.addEventListener("load", function() {
	const userData = JSON.parse(localStorage.getItem("user_data"))
	if(userData != null){
		inputName.value = userData.name;
		inputEmail.value = userData.email;
		inputPassword.value = userData.password;
		inputConfirmPassword.value = userData.password;
		inputAge.value = userData.age;
		inputPhoneNumber.value = userData.phone_number;
		inputAddress.value = userData.address;
		inputCity.value = userData.city;
		inputPostalCode.value = userData.postal_code;
		inputDni.value = userData.dni;
		realTimeText();
	}
})
