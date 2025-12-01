// OBTENER ELEMENTOS DEL HTML
const btnCampana = document.getElementById("btnNotificaciones");
const badge = document.getElementById("badgeNoti");
const lista = document.getElementById("listaNotificaciones");

// GUARDAR NOTIFICACIÓN
function guardarNotificacion(mensaje, tipo = "info") {
    let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];

    const nueva = {
        id: Date.now(),
        mensaje,
        tipo,
        fecha: new Date().toLocaleString(),
        leida: false
    };

    notificaciones.push(nueva);
    localStorage.setItem("notificaciones", JSON.stringify(notificaciones));
}

// MOSTRAR NOTIFICACIÓN 
function mostrarNotificacion(n) {
    const item = document.createElement("div");
    item.className = `notificacion-item ${n.tipo}`;
    item.textContent = `${n.mensaje} — ${n.fecha}`;
    lista.prepend(item);
}

//CARGAR NOTIFICACIONES
function cargarNotificaciones() {
    lista.innerHTML = ""; 

    let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];

    notificaciones.forEach(n => {
        mostrarNotificacion(n);
    });
}


// ACTUALIZAR NÚMERO DE NOTIFICACIONES
function actualizarBadge() {
    let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];
    const noLeidas = notificaciones.filter(n => !n.leida).length;
    badge.textContent = noLeidas;
}

//NOTIFICACIONES
function notificar(mensaje, tipo = "info") {
    
    guardarNotificacion(mensaje, tipo);

    
    mostrarNotificacion({
        mensaje,
        tipo,
        fecha: new Date().toLocaleString()
    });

    // ACTUALIZAR NÚMERO DE NOTIFICACIONES
    actualizarBadge();
}

//ABRIR Y CERRAR CAMPANA
btnCampana.addEventListener("click", () => {
    lista.classList.toggle("lista-oculta");

    // ACTUALIZAR 
    if (!lista.classList.contains("lista-oculta")) {

        cargarNotificaciones();

        // MARCAR COMO LEÍDAS
        let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];
        notificaciones = notificaciones.map(n => ({ ...n, leida: true }));
        localStorage.setItem("notificaciones", JSON.stringify(notificaciones));

        // ACTUALIZAR BADGE
        actualizarBadge();
    }
});


actualizarBadge();

