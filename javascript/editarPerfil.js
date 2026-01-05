window.onload = function() {
    console.log("Sistema ALU Perfil Cargado");

    const modal = document.getElementById("modalEditar");
    const btnAbrir = document.getElementById("btnEditarPerfil");
    const btnCerrar = document.getElementById("cerrarModal");
    const btnGuardar = document.getElementById("guardarCambios");

    // Función para actualizar todos los campos y fotos en la interfaz
    function refrescarInterfaz() {
        const user = JSON.parse(localStorage.getItem("datosUsuario"));
        if (!user) return;

        // Textos del perfil
        if(document.getElementById("nombres")) document.getElementById("nombres").textContent = user.nombres || "Usuario";
        if(document.getElementById("emailPerfil")) document.getElementById("emailPerfil").textContent = user.email || "correo@ejemplo.com";
        if(document.getElementById("frasePerfil")) document.getElementById("frasePerfil").textContent = `"${user.frase || 'Sin descripción'}"`;
        if(document.getElementById("edadPerfil")) document.getElementById("edadPerfil").textContent = user.edad || "--";
        if(document.getElementById("semestrePerfil")) document.getElementById("semestrePerfil").textContent = user.semestre || "--";
        if(document.getElementById("carreraPerfil")) document.getElementById("carreraPerfil").textContent = user.carrera || "--";
        
        // Secciones extra
        if(document.getElementById("enseñar1")) document.getElementById("enseñar1").textContent = user.enseñar1 || "Sin asignar";
        if(document.getElementById("aprender1")) document.getElementById("aprender1").textContent = user.aprender1 || "Sin asignar";
        if(document.getElementById("proyecto1")) document.getElementById("proyecto1").textContent = user.proyecto1 || "Sin proyectos";

        // Nombre de usuario en posts y miniaturas
        document.querySelectorAll('[id="usuario"]').forEach(el => el.textContent = user.usuario || user.nombres);

        // Actualizar fotos (grandes y pequeñas)
        if (user.foto) {
            document.querySelectorAll('#fotoPerfil').forEach(img => img.src = user.foto);
        }
    }

    // Carga inicial
    refrescarInterfaz();

    // Abrir Modal y rellenar inputs
    if (btnAbrir) {
        btnAbrir.onclick = function() {
            modal.classList.remove("hidden");
            const user = JSON.parse(localStorage.getItem("datosUsuario")) || {};
            
            document.getElementById("editNombres").value = user.nombres || "";
            document.getElementById("editNombre").value = user.usuario || "";
            document.getElementById("editFrase").value = user.frase || "";
            document.getElementById("editEdad").value = user.edad || "";
            document.getElementById("editCarrera").value = user.carrera || "";
            document.getElementById("editSemestre").value = user.semestre || "";
            document.getElementById("editEnseñar1").value = user.enseñar1 || "";
            document.getElementById("editAprender1").value = user.aprender1 || "";
            document.getElementById("editProyecto1").value = user.proyecto1 || "";
            
            if(user.foto) document.getElementById("previewFoto").src = user.foto;
        };
    }

    // Cerrar Modal
    if (btnCerrar) btnCerrar.onclick = () => modal.classList.add("hidden");

    // Previsualizar foto en el modal
    document.getElementById("editFoto").onchange = function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => document.getElementById("previewFoto").src = event.target.result;
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // BOTÓN GUARDAR CAMBIOS
    if (btnGuardar) {
        btnGuardar.onclick = function(e) {
            e.preventDefault();
            let user = JSON.parse(localStorage.getItem("datosUsuario")) || {};

            // Capturar datos de texto
            user.nombres = document.getElementById("editNombres").value;
            user.usuario = document.getElementById("editNombre").value;
            user.frase = document.getElementById("editFrase").value;
            user.edad = document.getElementById("editEdad").value;
            user.carrera = document.getElementById("editCarrera").value;
            user.semestre = document.getElementById("editSemestre").value;
            user.enseñar1 = document.getElementById("editEnseñar1").value;
            user.aprender1 = document.getElementById("editAprender1").value;
            user.proyecto1 = document.getElementById("editProyecto1").value;

            const inputFoto = document.getElementById("editFoto");

            const completarGuardado = () => {
                localStorage.setItem("datosUsuario", JSON.stringify(user));
                refrescarInterfaz();
                modal.classList.add("hidden");
                Swal.fire({
                    icon: 'success',
                    title: 'Perfil Actualizado',
                    background: '#0a0a0a',
                    color: '#fff',
                    timer: 1500,
                    showConfirmButton: false
                });
            };

            // Lógica asíncrona para la foto
            if (inputFoto.files && inputFoto.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    user.foto = event.target.result;
                    completarGuardado();
                };
                reader.readAsDataURL(inputFoto.files[0]);
            } else {
                completarGuardado();
            }
        };
    }
};