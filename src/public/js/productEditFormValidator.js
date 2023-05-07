window.onload = function() {
    const form = document.getElementById('form')
    form.name.focus()
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const errors = [];
        if (!form.name.value) {
            errors.push({
              name: "name",
              message: "Tienes que ingresar un nombre",
            });
            form.name.classList.add("is-invalid");
          } else {
            form.name.classList.remove("is-invalid");
            form.name.classList.add("is-valid");
          }
    
    if (!form.price.value) {
        errors.push({
          name: "price",
          message: "Tienes que ingresar un precio",
        });
        form.price.classList.add("is-invalid");
      } else {
        form.price.classList.remove("is-invalid");
        form.price.classList.add("is-valid");
      }
      if (!form.description.value || form.description.value.length < 20) {
        errors.push({
          name: "description",
          message: "La descripción debe tener al menos 20 caracteres",
        });
        form.description.classList.add("is-invalid");
      } else {
        form.description.classList.remove("is-invalid");
        form.description.classList.add("is-valid");
      }
      errors.forEach((error) => {
        const errorLabel = document.getElementById(`error-${error.name}`);
        errorLabel.classList.add("show-error-message");
        errorLabel.innerText = error.message;
      });
      if (errors.length === 0) {
        form.submit();
      }
    })
}