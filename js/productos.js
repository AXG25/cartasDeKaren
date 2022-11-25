//capturamos la linea 78 del html donde se mostraran los productos
const scutomsCollections = document.getElementById("scutomsCollections");

// capturamos el icono del carrito linea 47
const verCarrito = document.getElementById("verCarrito");

// capturamos la linea 39 del html donde se mostraran los productos del carrito
const sideCartContainer = document.getElementById("sideCart-container");

//contador para el icono del carrito 
const contadorCarrito = document.getElementById("contadorCarrito");

// creamos el arreglo donde se guardaran los productos
// edit: recuperamos lo que hay en el local storage y lo guardamos en el arreglo carrito en caso de que no haya nada dejamos el arreglo vacio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// recorremos el array de productos y creamos elementos html para mostrarlos
productos.forEach((producto) => {
  let contenedor = document.createElement("div");
  contenedor.className = "producto";
  contenedor.innerHTML = `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <span>${producto.precio} $</span>
    `;

    // lo enchuflamos al html LN-78
  scutomsCollections.append(contenedor);

  // creamos el boton de comprar
  let btnComprar = document.createElement("div");
  btnComprar.className = "button";
  btnComprar.innerHTML = `
    <a class="btn">agregar a la cesta</a> 
    `;

  // lo enchuflamos al contenedor
  contenedor.append(btnComprar);
 
  // le damos funcionalidad al boton de comprar
  btnComprar.addEventListener("click", () => {
   // notificacion bonita
    Toastify({
      text: "Producto añadido",
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, rgb(255, 203, 228), rgba(227, 23, 38, 1))",
      },
      onClick: function(){} // Callback after click
    }).showToast();

  //funcion que verfica si el producto ya esta en el carrito
  const yaEsta = carrito.some((productoRepetido) => productoRepetido.id === producto.id); 
    if(yaEsta) {
      carrito.map((productoRepetido) => {
        if(productoRepetido.id === producto.id) {
          productoRepetido.cantidad++;
        }
      })
    } else {
    carrito.push({
      id: producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  }
    pintarCarrito();
    cantidadCarrito();
    guardarCarrito();
  });
});

// funcion que guarda el carrito en el local storage
const guardarCarrito = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};
