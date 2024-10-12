"use strict";

function validate(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var age = document.getElementById('age').value;
  var msgBox = document.getElementById('message');
  var message = '';

  if (email === '') {
    message = 'Please enter an email.';
    msgBox.style.color = 'red';
  } else if (pass === '') {
    message = 'Password must be at least 8 characters.';
    msgBox.style.color = 'red';
  } else if (age === '') {
    message = 'Age must be between 12 and 50.';
    msgBox.style.color = 'red';
  } else {
    message = 'Login successful!';
    msgBox.style.color = 'green';
  }

  msgBox.innerText = message;
}
//# sourceMappingURL=script.dev.js.map
