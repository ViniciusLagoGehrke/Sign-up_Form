const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailAddress');
const password = document.getElementById('password');

// refactored //
form.addEventListener('submit', (e) => {
 e.preventDefault();
 
 checkInputs([firstName, lastName, email, password]);
 checkEmail(email);
});

// refactored //
function checkInputs(inputArray){
 inputArray.forEach((input) => {
   if(input.value.trim() === "" || input.value.trim == null){
     setError(input, `${input.placeholder} cannot be empty`);
   } else {
     setSuccess(input);
   }
 });
}

// refactored //
function setError(input, message){
 const formControl = input.parentElement; //div .form-control
 const errorMessage = formControl.querySelector('.error-msg');
 
 //add error message inside small
 errorMessage.innerText = message;
 
 //add error class on input
 formControl.className = 'form-control error';
}

// refactored //
function setSuccess(input) {
 const formControl = input.parentElement;
 formControl.className = "form-control";
}

// NEEDS TO BE refactored //
function checkEmail(email){
 const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(re.test(String(email.value).trim())){
  email.style.color = "hsl(249, 31%, 18%)";
  } else {
    setError(input, "Looks like this is not an email");
    email.style.color = "hsl(0, 100%, 74%)";
  }
}