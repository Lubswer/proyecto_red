// 1. Obtener el usuario guardado
const usuario = JSON.parse(localStorage.getItem("datosUsuario"));

// 2. Validar si existe un usuario guardado
if (!usuario) {
    // Si no hay usuario, redirigimos al login
    window.location.href = "index.html#cuadro-login";
} else {
    // 3. Insertar datos básicos en el perfil
    document.getElementById("nombres").textContent = usuario.nombres;
    document.getElementById("emailPerfil").textContent = usuario.email;

    // 4. CARGA INICIAL DE DATOS EXTRA (Si ya existen en localStorage)
    // Esto asegura que al entrar, se vean la edad, carrera, etc., que se guardaron antes.
    if(usuario.frase) document.getElementById("frasePerfil").textContent = `"${usuario.frase}"`;
    if(usuario.edad) document.getElementById("edadPerfil").textContent = usuario.edad;
    if(usuario.carrera) document.getElementById("carreraPerfil").textContent = usuario.carrera;
    if(usuario.semestre) document.getElementById("semestrePerfil").textContent = usuario.semestre;
    
    // Si tienes una foto guardada en el objeto usuario, también la cargamos
    if(usuario.foto) document.getElementById("fotoPerfil").src = usuario.foto;
}