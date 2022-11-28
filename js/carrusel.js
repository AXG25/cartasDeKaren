const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft += step;
    if (carrusel.scrollLeft == maxScrollLeft) {
      step *= -1;
    } else if (carrusel.scrollLeft == 0) {
      step *= -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


