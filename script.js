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
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
}



AOS.init({
  duration: 800, // duración de animación en ms
  once: true     // animar solo una vez
});
