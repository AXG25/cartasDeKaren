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
    let mensaje = `Hola, mi nombre es ${nombreUsuario.value}. Me gustaría realizar el siguiente pedido:`;
    carrito.forEach((producto) => {
        mensaje += `
        - ${producto.nombre} x ${producto.cantidad} $${producto.precio * producto.cantidad}

    `;
    });
    mensaje += `Total: ${total} $`;
    mensaje += `Envialo a la siguiente dirección: ${direccionUsuario.value}`;



    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`);
    }else{
        alert('debe completar los campos')
    }
    

}


/*---------ADDEVENTLISTENERS------------------*/
btnPago.addEventListener('click',finalizarCompra);