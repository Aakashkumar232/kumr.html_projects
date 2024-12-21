const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');  // Corrected class name
const iconClose = document.querySelector('.icon-close');  // Corrected class name

// Open the popup when the Login button is clicked
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Close the popup when the close icon is clicked
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Show the register form when the register link is clicked
registerLink.addEventListener('click', () => {
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'block';
});

// Show the login form when the login link is clicked
loginLink.addEventListener('click', () => {
    document.querySelector('.form-box.register').style.display = 'none';
    document.querySelector('.form-box.login').style.display = 'block';
});
