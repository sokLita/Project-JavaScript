
function togglePassword() {
    let passwordField = document.getElementById('password');
    let eyeIcon = document.querySelector('.toggle-password');

    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';              
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash'); 
    } 

    else {
        passwordField.type = 'password';          
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye'); 
    }
}


document.querySelector('form').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;

    
    if (email === '' || password === '') {
        event.preventDefault(); 
        alert('Please enter your email and password.');
        return;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
        event.preventDefault();
        alert('Please enter a valid email (example: name@site.com)');
        return;
    }


    event.preventDefault(); 
    alert('Login successful! Welcome back! ');

});
