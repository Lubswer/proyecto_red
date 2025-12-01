const formRegistro = document.getElementById("formRegistro");
formRegistro.addEventListener("submit", function(e) { e.preventDefault();

    const datos = {
        nombres: document.getElementById("regNombre").value,
        email: document.getElementById("regEmail").value,
        usuario: document.getElementById("regUsuario").value,
        password: document.getElementById("regPassword").value,
        verificar: document.getElementById("regVerificar").value
    };
    if (!datos.nombres.trim() ||
    !datos.email.trim() ||
    !datos.usuario.trim() ||
    !datos.password.trim() ||
    !datos.verificar.trim()) {
    Swal.fire({
    icon: 'warning',
    title: 'Campos incompletos',
    text: 'Todos los campos son obligatorios',
    timer: 1000,
    showConfirmButton: false
    });
    return;
    }
    if (datos.password !== datos.verificar) {
    Swal.fire({
    icon: 'error',
    title: 'Contraseña incorrecta',
    text: 'Las contraseñas no coinciden',
    timer: 1000,
    showConfirmButton: false
    });
    return;
    }
    const datosAGuardar = {
    nombres: datos.nombres,
    email: datos.email,
    usuario: datos.usuario,
    password: datos.password,
        // CAMPOS EXTRA DEL PERFIL
    frase: "",
    edad: "",
    carrera: "",
    semestre: "",
    enseñar1: "",
    enseñar2: "",
    aprender1: "",
    aprender2: "",
    proyecto1: "",
    proyecto2: "",
    proyecto3: "",
    proyecto4: "",
    foto: ""
    };
    localStorage.setItem("datosUsuario", JSON.stringify(datosAGuardar));
    
Swal.fire({
    icon: 'success',
    title: '¡Registro exitoso!',
    text: 'Tu cuenta ha sido creada correctamente',
    timer: 1000,
    showConfirmButton: false,
}).then(() => {
    window.location.href = "index.html#cuadro-login";
});


});
