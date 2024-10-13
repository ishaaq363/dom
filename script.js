function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (password === '') {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    }  else if (username === '') {
        message = 'Username must be at least 8 characters.';
        msgBox.style.color = 'red';
    } 
    else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}


