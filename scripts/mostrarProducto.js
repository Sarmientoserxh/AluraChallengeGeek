import { conexionAPI } from "./API.js";

const mostrador = document.getElementById("data-lista");

export function crearCard(nombre, precio, imagen, id) {
    const card = document.createElement("div");
    card.className = "item";
    card.dataset.id = id;
    card.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <p class="descripcion">${nombre}</p>
        <div class="contenido-label">
            <span>$${precio}.0</span>
            <i class="fa-solid fa-trash-can" data-trash></i>
        </div>`;
    return card;
}

async function listarProductos() {
    try {
        const productos = await conexionAPI.listarProductos();
        productos.forEach(producto => {
            const card = crearCard(producto.nombre, producto.precio, producto.imagen, producto.id);
            mostrador.appendChild(card);
        });
    } catch (error) {
        console.error("Error al listar productos:", error);
    }
}

listarProductos().then(r => console.log("Si deja lista"));
