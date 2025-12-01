// 1. Obtener el usuario guardado
const usuario = JSON.parse(localStorage.getItem("datosUsuario"));
// 2. Validar si existe un usuario guardado
if (!usuario) {
    // Si no hay usuario, redirigimos al login
    window.location.href = "index.html#cuadro-login";
} else {
    // 3. Insertar datos en el perfil
    document.getElementById("nombres").textContent = usuario.nombres;
    document.getElementById("emailPerfil").textContent = usuario.email;
}

