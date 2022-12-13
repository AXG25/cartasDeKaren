/*-----------------Constantes y variables ----------*/
const carrito = JSON.parse(localStorage.getItem('carrito'));
const total = (carrito.reduce((acc, item) => acc + item.precio * item.cantidad,0));

/*-----------------QUERY SELECTORS--------------*/
const nombreUsuario = document.querySelector('.nombreUsario');
const direccionUsuario = document.querySelector('.direccionUsario');
const btnPago = document.querySelector('.pago');


/*----------FUNCIONES-------------------*/
const finalizarCompra = (event)=>{
    event.preventDefault();
    if(nombreUsuario.value !== "" && direccionUsuario.value !== ""){
        const whatsappNumber = +573245449563;
    let mensaje = `Hola me llamo ${nombreUsuario.value}.
    `;

    carrito.forEach((producto) => {
        mensaje += `
        Enviame por favor la tarjeta ${producto.nombre}. de esta tarjeta voy a querer ${producto.cantidad} copias. por el valor de $${producto.precio * producto.cantidad} y `;
    });
    
    mensaje += `
    Envia esto por favor a la siguiente dirección: ${direccionUsuario.value}.
    Segun el carrito el total a pagar es: ${total}$
    el envio tiene algun costo extra?
    `;

    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`);
    }else{
        alert('debe completar los campos')
    }
    

}


/*---------ADDEVENTLISTENERS------------------*/
btnPago.addEventListener('click',finalizarCompra);