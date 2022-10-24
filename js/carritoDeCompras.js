const scutomsCollections = document.getElementById("scutomsCollections");
const verCarrito = document.getElementById("verCarrito");
const sideCartContainer = document.getElementById("sideCart-container");
const carrito = [];

productos.forEach((producto) => {
  let contenedor = document.createElement("div");
  contenedor.className = "producto";
  contenedor.innerHTML = `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <span>${producto.precio} $</span>
    `;

  scutomsCollections.append(contenedor);

  let btnComprar = document.createElement("div");
  btnComprar.className = "button";
  btnComprar.innerHTML = `
    <a class="btn">agregar a la cesta</a> 
    `;

  contenedor.append(btnComprar);

  btnComprar.addEventListener("click", () => {
    carrito.push({
      id: producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
 sideCartContainer.innerHTML = "";
 carrito.forEach((producto) => {
    var productoSideCart = document.createElement("div");
    productoSideCart.className = "producto-sideCart";
    productoSideCart.innerHTML = `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <p>${producto.precio} $</p>
    `;

    sideCartContainer.append(productoSideCart)

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    document.getElementById("precio").innerHTML = `${total} $`;
 })


});

function openCart() {
    document.getElementById("sideCart").style.width = "300px";
  }
  
function closeCart() {
    document.getElementById("sideCart").style.width = "0px";
  }

  