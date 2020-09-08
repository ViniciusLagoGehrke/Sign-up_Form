const form = document.getElementById('submission');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password');

const btn = document.querySelector('.button');

const errorFirstName = document.querySelector('.firstName');
const errorLastName = document.querySelector('.lastName');
const errorEmailName = document.querySelector('.emailAddress');
const errorPassword = document.querySelector('.password');

console.log(btn);

form.addEventListener('submit',(e) => {
  let message = []
  if (name.value === '' || name.value == null) {
    messages.push('First Name cannot be empty')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorFirstName.innerText = messages.join(', ')
  }
})

