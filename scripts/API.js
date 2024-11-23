
const url = "http://localhost:3001/productos";

async function listarProductos() {
    try {
        const conexion = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!conexion.ok) {
            alert("No estas conectado a la API");
            throw new Error(`Error en la conexión: ${conexion.status}`);
        }

        return await conexion.json();
    } catch (error) {
        alert("No estas conectado a la API");
        console.error("Error al obtener los productos:", error);
        return [];
    }
}

async function enviarProducto(nombre,precio,imagen) {
    try {
        const conexion = await fetch(url,{
            method: "POST",
            headers: {"content-type":"aplication/json"},
            body:JSON.stringify({
                nombre:nombre,
                precio:precio,
                imagen:imagen
            })
        })
        return await conexion.json();
    }catch(error){
        console.error("no se pudo enviar", error)
    }
}

async function eliminarProducto(id) {
    try {
        const conection = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!conection.ok) {
            throw new Error("Error al eliminar el producto");
        }
    } catch (error) {
        console.error("Producto no se pudo eliminar:", error);
    }
}

export const conexionAPI = { listarProductos,enviarProducto, eliminarProducto };
