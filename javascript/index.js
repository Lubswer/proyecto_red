const formLogin = document.getElementById('formLogin');
formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    const emailIngresado = document.getElementById("logEmail").value;
    const passwordIngresado = document.getElementById("logPassword").value;
    const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));
    if (!datosGuardados) {
    return;
    }

   
    
    if (emailIngresado === datosGuardados.email &&
    passwordIngresado === datosGuardados.password) {
    Swal.fire({
    icon: 'success',
    title: '¡Bienvenido!',
    text: 'Inicio de sesión exitoso',
    timer: 1000,
    showConfirmButton: false
    }).then(() => {
    window.location.href = "facultades.html";
    });



    } else {
    // SI SON INCORRECTOS
    Swal.fire({
    icon: 'error',
    title: 'Login fallido',
    text: 'Usuario o contraseña incorrectos',
    timer: 1000,
    showConfirmButton: false
});
    }

});