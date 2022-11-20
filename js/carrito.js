// funcion para mostrar los productos del carrito
const pintarCarrito = () => {
  // limpiamos el html para que no se repitan los productos
  sideCartContainer.innerHTML = "";

  // recorremos el array del carrito el cual ha sido modificado por el boton de comprar y creamos los elemntos html para mostrarlos
  for (let i = 0; i < carrito.length; i++) {
    let productoSideCart = document.createElement("div");
    productoSideCart.className = "producto-sideCart";
    productoSideCart.innerHTML = `
        <img src="${carrito[i].img}">
        <p>${carrito[i].nombre}</p>
        <p>${carrito[i].precio} $</p>
        <p id="restar" class="pointer"> - </p>
        <p>${carrito[i].cantidad}</p>
        <p id="sumar" class="pointer"> + </p>
        `;

    // lo enchuflamos al html LN-39
    sideCartContainer.append(productoSideCart);

    let restarProducto = productoSideCart.querySelector("#restar");
    restarProducto.addEventListener("click", () => {
      carrito[i].cantidad--;
      if (carrito[i].cantidad === 0) {
        carrito.splice(i, 1);
      }
      pintarCarrito();
      cantidadCarrito();
      guardarCarrito();
    });

    let sumarProducto = productoSideCart.querySelector("#sumar");
    sumarProducto.addEventListener("click", () => {
      carrito[i].cantidad++;
      pintarCarrito();
      cantidadCarrito();
      guardarCarrito();
    });

    // creamos el boton de eliminar
    let btnEliminar = document.createElement("span");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    productoSideCart.append(btnEliminar);

    // le damos funcionalidad al boton de eliminar
    btnEliminar.addEventListener("click", eliminarProducto);

    // funcion que nos muestra el total de la compra
    const total = carrito.reduce(
       (acc, item) => acc + item.precio * item.cantidad,
      0
     );

    
    

    let totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
        <p>Total a pagar: <span>${total} $</span></p>
        `;
    sideCartContainer.append(totalCompra);
  

    // creamos la funcion para eliminar solo el producto que se le dio click
    function eliminarProducto() {
      carrito.splice(i, 1);
      cantidadCarrito();
      guardarCarrito();
      pintarCarrito();
    }
  }
};

// funcion que abre el carrito
function openCart() {
  document.getElementById("sideCart").style.width = "360px";
}

// funcion que cierra el carrito
function closeCart() {
  document.getElementById("sideCart").style.width = "0px";
}

verCarrito.addEventListener("click", pintarCarrito);

const cantidadCarrito = () => {
  const cantidadDeProductos = carrito.length;
  //guardamos la cantidad de productos en el local storage
  localStorage.setItem(
    "cantidadDeProductos",
    JSON.stringify(cantidadDeProductos)
  );
  //obtenemos la cantidad de productos del local storage y la mostramos en el html
  contadorCarrito.innerText = JSON.parse(
    localStorage.getItem("cantidadDeProductos")
  );
};

cantidadCarrito();
