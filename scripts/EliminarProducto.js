import {conexionAPI} from "./API.js";

const mostrador = document.getElementById("data-lista");

async function eliminarProducto(id) {
    try {
        await conexionAPI.eliminarProducto(id);
        const card = document.querySelector(`[data-id='${id}']`);
        if (card) {
            card.remove();
        }
    } catch (error) {
        console.error("Error al intentar eliminar el producto:", error);
    }
}

mostrador.addEventListener("click", (event) => {
    if (event.target.dataset.trash !== undefined) {
        const card = event.target.closest(".item");
        const id = card.dataset.id;
        console.log(`ID del producto a eliminar: ${id}`);
        eliminarProducto(id);
    }
});