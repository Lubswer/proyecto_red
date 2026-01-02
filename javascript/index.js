const loginBtn = document.getElementById("Login");
loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("si se ");
    const formLogin = document.getElementById('viewLogin');
    console.log("si se view");
    formLogin.classList.remove('hidden');
    console.log("si se view vebnn");

})
const loginBtn2 = document.getElementById("btnComenzar");
loginBtn2.addEventListener("click", function(e){
    e.preventDefault();
    console.log("si se ");
    const formLogin = document.getElementById('viewLogin');
    console.log("si se view");
    formLogin.classList.remove('hidden');
    console.log("si se view vebnn");

})

const video = document.getElementById("video");
video.addEventListener("click", function(e){
    e.preventDefault();
    console.log("se encontro el boton ");
    const viewVideo = document.getElementById('viewVideo');
    console.log("se encontro el div ");
    viewVideo.classList.remove('hidden');
    console.log("si se muestra el video");

})

const cerrarVideo = document.getElementById("viewVideo");

// 1. EVENTO PARA CERRAR (Haciendo clic en el fondo)
cerrarVideo.addEventListener("click", function(e) {
    // Si el elemento que recibió el clic es el fondo mismo (viewLogin)
    // y NO el formulario o contenido que está adentro:
    if (e.target === cerrarVideo) {
        cerrarVideo.classList.add('hidden');
        console.log("Cerrado al hacer clic en el fondo");
    }
});
const viewLogin = document.getElementById("viewLogin");

// 1. EVENTO PARA CERRAR (Haciendo clic en el fondo)
viewLogin.addEventListener("click", function(e) {
    // Si el elemento que recibió el clic es el fondo mismo (viewLogin)
    // y NO el formulario o contenido que está adentro:
    if (e.target === viewLogin) {
        viewLogin.classList.add('hidden');
        console.log("Cerrado al hacer clic en el fondo");
    }
});


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