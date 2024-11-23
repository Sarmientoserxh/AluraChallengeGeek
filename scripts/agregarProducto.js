import { conexionAPI } from "./API.js";
import { crearCard } from "./mostrarProducto.js";

const btnSubmit = document.getElementById("enviarDatos");
const btnClear = document.getElementById("clear");
const formulario = document.getElementById("form");
const mostrador = document.getElementById("data-lista"); // Asegúrate de tener acceso a este elemento

async function crearProducto() {
    const campos = [
        document.querySelector("[data-nombre]").value,
        document.querySelector("[data-number]").value,
        document.querySelector("[data-imagen]").value
    ];

    if (campos.some(campo => campo === "")) {
        return;
    }

    const nuevoProducto = await conexionAPI.enviarProducto(...campos);

    // Actualizar el DOM con el nuevo producto
    const card = crearCard(nuevoProducto.nombre, nuevoProducto.precio, nuevoProducto.imagen, nuevoProducto.id);
    mostrador.appendChild(card);
}

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    crearProducto().then(r => console.log("Producto añadido con éxito!"));
});

btnClear.addEventListener("click", () => {
    formulario.reset();
});
