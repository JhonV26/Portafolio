document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Event listener para la validación del formulario
  form.addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que se envíe el formulario de inmediato

    // Limpia el mensaje anterior
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');

    // Verificar que todos los campos estén correctamente llenados
    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const mensaje = form.mensaje.value;

    if (!nombre || !correo || !mensaje) {
      formMessage.textContent = "Por favor, completa todos los campos.";
      formMessage.classList.add('error');
      return; // Evita el envío del formulario
    }

    // Si los campos son válidos, se puede enviar el formulario
    form.submit(); // Se envía el formulario al servidor

    // Mostrar mensaje de éxito
    formMessage.textContent = "¡Tu mensaje ha sido enviado correctamente!";
    formMessage.classList.add('success');

  });

});
