window.onload = function () {

    const loginForm = document.getElementById('loginForm');
    
    loginForm.email.focus();

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });

        const errors = [];

        if (!loginForm.email.value) {
            errors.push({ name: 'email', message: 'El campo Email no puede estar vacio' });
            loginForm.email.classList.add('is-invalid');
        } else {
            loginForm.email.classList.remove('is-invalid');
            loginForm.email.classList.add('is-valid');
        }
        if (!loginForm.password.value) {
            errors.push({ name: 'password', message: 'El campo Password no puede estar vacio' });
            loginForm.password.classList.add('is-invalid');
        } else {
            loginForm.password.classList.remove('is-invalid');
            loginForm.password.classList.add('is-valid');
        }

        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        });
        if (errors.length === 0) {
            loginForm.submit();
        }
    });

}