const form = document.getElementById('form');
 
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailAddress');
const password = document.getElementById('password');
 
const btn = document.querySelector('.button');
 
const errorFirstName = document.querySelector('.firstName');
const errorLastName = document.querySelector('.lastName');
const errorEmail = document.querySelector('.emailAddress');
const errorPassword = document.querySelector('.password');
 
form.addEventListener('submit', (e) => {
 e.preventDefault();
 
 checkInputs();
});
 
function checkInputs(){
 //get the values from inputs
 const firsNameValue = firstName.value.trim(); //trim removes unwanted spaces
 const lastNameValue = lastName.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 
 if(firsNameValue === '' || firsNameValue == null){
   //show error
   //add error class
   setErrorFor(firstName, 'First Name cannot be empty');
 } else {
   // submit
   setSuccessFor(firstName);
 }
 
 if(lastNameValue === ''|| lastNameValue == null){
   //show error
   //add error class
   setErrorFor(lastName, 'Last Name cannot be empty');
 } else {
   //set Success
   setErrorFor(lastName, 'Last Name cannot be empty');
   setSuccessFor(lastName);   
 }
 
 if(emailValue === '' || emailValue == null){
   setErrorFor(email, 'Email address cannot be empty');
 } else if(!isEmail(emailValue)){
   setErrorFor(email,'Looks like this in not an email');
 } else {
   setSuccessFor(email);
 }
 
 if(passwordValue === ''|| passwordValue == null){
   //show error
   //add error class
   setErrorFor(password, 'Password cannot be empty');
 } else {
       setSuccessFor(email);
 }
}
 
function setErrorFor(input, message){
 const formControl = input.parentElement; //li .form-control
 const errorMessage = formControl.querySelector('.error-msg');
 
 //add error message inside small
 errorMessage.innerText = message;
 
 //add error class
 formControl.className = 'form-control error';
}
 
function setSuccessFor(input) {
 const formControl = input.parentElement;
 formControl.className = "form-control";
}
 
function isEmail(email){
 const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}
