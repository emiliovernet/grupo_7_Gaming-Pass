window.onload = function () {

    const registerForm = document.getElementById('registerForm');
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    registerForm.name.focus();

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });

        const errors = [];

        if (!registerForm.name.value) {
            errors.push({ name: 'name', message: 'El campo Titulo no puede estar vacio' });
            registerForm.name.classList.add('is-invalid');
        } else {
            registerForm.name.classList.remove('is-invalid');
            registerForm.name.classList.add('is-valid');
        }
        if (!registerForm.email.value) {
            errors.push({ name: 'email', message: 'El campo Email no puede estar vacio' });
            registerForm.email.classList.add('is-invalid');
        } else {
            registerForm.email.classList.remove('is-invalid');
            registerForm.email.classList.add('is-valid');
        }
        if (registerForm.password.value <= 3) {
            errors.push({ name: 'password', message: 'El campo Password no puede ser menor a 3 ni estar vacio' });
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
