wrapper = document.querySelector('.wrapper');
linkRegister = document.querySelector('.login-register');
linkLogin = document.querySelector('.register-login');

linkRegister.addEventListener('click', () => {
    wrapper.classList.add('active');
});

linkLogin.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }

