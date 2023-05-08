window.onload = function () {

    const registerForm = document.getElementById('registerForm');
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    registerForm.name.focus();

    //NAME//
    registerForm.name.addEventListener('keydown', function (event) {
        if (event.key == '#' || event.key == '$') {
            alert('¡Se recomienda no utilizar #hastags o simbolos!')
            registerForm.name.style.color = 'Red';
        }
    })

    registerForm.name.addEventListener('blur', function (event) {
        if (registerForm.name.value.indexOf('#') == -1 && registerForm.name.value.indexOf('$') == -1) {
            registerForm.name.style.color = 'Green';
        }
        else {
            registerForm.name.style.color = 'Red'
        }
    })


    //EMAIL//

    registerForm.email.addEventListener('keydown', function (event) {
        if (registerForm.email.value.indexOf('@') == -1 || registerForm.email.value.indexOf('.') == -1) {
            registerForm.email.style.color = 'Red';
        }
        else {
            registerForm.email.style.color = 'Green'
        }
    })

    //PASSWORD//

    registerForm.password.addEventListener('keydown', function (event) {
        if (registerForm.password.value.length >= 6) {
            registerForm.password.style.color = 'Green'
        }
    })

    //PREVENT DEFAULT//

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });

        const errors = [];

        if (!registerForm.name.value && (registerForm.name.value.indexOf('#') == -1 || registerForm.name.value.indexOf('$') == -1)) {
                errors.push({ name: 'name', message: 'Este campo no puede estar vacio ni contener simbolos' });
                registerForm.name.classList.add('is-invalid');
        } else {
                registerForm.name.classList.remove('is-invalid');
                registerForm.name.classList.add('is-valid');
            }

        if (!registerForm.email.value || registerForm.email.value.indexOf('@') == -1 || registerForm.email.value.indexOf('.') == -1) {
            errors.push({ name: 'email', message: 'El campo Email no puede no contener "@" o estar vacio ' });
            registerForm.email.classList.add('is-invalid');
        } else {
            registerForm.email.classList.remove('is-invalid');
            registerForm.email.classList.add('is-valid');
        }
        if (registerForm.password.value.length <= 6) {
            errors.push({ name: 'password', message: 'No se permite password vacia ni inferior a 6 caracteres' });
            registerForm.password.classList.add('is-invalid');
        } else {
            registerForm.password.classList.remove('is-invalid');
            registerForm.password.classList.add('is-valid');
        }


        if (registerForm.avatar.files.length == 0) {
            errors.push({
                name: "avatar",
                message: "Tienes que cargar una imagen",
            });
            registerForm.avatar.classList.add("is-invalid");
        } else if (!allowedExtensions.exec(registerForm.avatar.value)) {
            errors.push({
                name: "avatar",
                message: "Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF.",
            });
            registerForm.avatar.classList.add("is-invalid");
        } else {
            registerForm.avatar.classList.remove("is-invalid");
            registerForm.avatar.classList.add("is-valid");
        }


        //error//
        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        });
        if (errors.length === 0) {
            registerForm.submit();
        }
    });

}
