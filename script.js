 function validarFormulario() {
      let nombre = document.getElementById("nombre").value;
      let email = document.getElementById("email").value;
      let motivo = document.getElementById("motivo").value;
      let imagen = document.getElementById("imagen").value;

      if (nombre === "" || email === "" || motivo === "" || imagen === "") {
          alert("Todos los campos son obligatorios...");
          return false;
      }
      return true;
  }

  function mostrarImagen(event) {
      let archivo = event.target.files[0];
      let imgPreview = document.getElementById('ver-imagen');

      if (archivo) {
          imgPreview.src = URL.createObjectURL(archivo);
          imgPreview.style.display = "block";
      } else {
          imgPreview.src = "";
          imgPreview.style.display = "none";
      }
  }


AOS.init({
  duration: 800, // duración de animación en ms
  once: true     // animar solo una vez
});
