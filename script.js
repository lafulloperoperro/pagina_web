// ==========================================
// OPTIPROJECTS - Script de la maqueta
// ==========================================

let listaProyectos = [];
let contador = 0;

/**
 * Agrega un proyecto a la lista (solo visual)
 */
function agregarProyecto(nombre) {
    listaProyectos.push(nombre);
    contador++;
    actualizarContador();
    mostrarAviso(nombre + " agregado a la lista");
}

/**
 * Actualiza el número del contador en el header
 */
function actualizarContador() {
    const contadorEl = document.getElementById("contador");
    if (contadorEl) {
        contadorEl.textContent = contador;
    }
}

/**
 * Muestra un aviso temporal en pantalla
 */
function mostrarAviso(mensaje) {
    // Evitar múltiples avisos
    const existente = document.querySelector(".aviso-temp");
    if (existente) existente.remove();

    const aviso = document.createElement("div");
    aviso.className = "aviso-temp";
    aviso.textContent = mensaje;

    aviso.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #8b1a1a;
        color: white;
        padding: 14px 22px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(139, 26, 26, 0.5);
        animation: fadeInOut 2.5s ease forwards;
    `;

    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.remove();
    }, 2500);
}

/**
 * Maneja el envío del formulario de contacto (solo visual)
 */
function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        mostrarAviso("Completa todos los campos");
        return;
    }

    mostrarAviso("Mensaje enviado (simulado)");
    event.target.reset();
}

// Animación CSS inyectada para el aviso
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(20px); }
        15% { opacity: 1; transform: translateY(0); }
        85% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
});
