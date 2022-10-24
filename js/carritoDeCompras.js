const scutomsCollections = document.getElementById("scutomsCollections");

let carrito = [];

const mostrarProductos = () => {
productos.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.className = "producto"
    contenedor.innerHTML = `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <span>${producto.precio} $</span>
    <div class="button">
       <a href="#" class="btn">comprar ahora</a> 
    </div>
    `;
    scutomsCollections.append(contenedor)
});
};
mostrarProductos()