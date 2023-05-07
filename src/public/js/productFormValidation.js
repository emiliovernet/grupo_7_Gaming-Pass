window.onload = function () {
  const form = document.getElementById("form");

  form.name.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = [];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

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
    form.name.addEventListener('change', function() {
        if (form.name.classList.contains('is-valid')) {
          errorMessage.classList.remove('show-error-message');
        }
      });

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

    if (!form.discount.value) {
      errors.push({
        name: "discount",
        message: "Tienes que ingresar un valor de descuento",
      });
      form.discount.classList.add("is-invalid");
    } else {
      form.discount.classList.remove("is-invalid");
      form.discount.classList.add("is-valid");
    }

    if (!form.category.value) {
      errors.push({
        name: "category",
        message: "Tienes que elegir una categoría",
      });
      form.category.classList.add("is-invalid");
    } else {
      form.category.classList.remove("is-invalid");
      form.category.classList.add("is-valid");
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

    if (form.image.files.length == 0) {
      errors.push({
        name: "image",
        message: "Tienes que cargar una imagen",
      });
      form.image.classList.add("is-invalid");
    } else if (!allowedExtensions.exec(form.image.value)) {
      errors.push({
        name: "image",
        message: "Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF.",
      });
      form.image.classList.add("is-invalid");
    } else {
      form.image.classList.remove("is-invalid");
      form.image.classList.add("is-valid");
    }

    errors.forEach((error) => {
      const errorLabel = document.getElementById(`error-${error.name}`);
      errorLabel.classList.add("show-error-message");
      errorLabel.innerText = error.message;
    });
    if (errors.length === 0) {
      form.submit();
    }
  });
};
