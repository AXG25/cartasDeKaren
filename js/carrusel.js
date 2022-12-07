const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
console.log(maxScrollLeft);
let intervalo;
let step = 1;
let scrollLeft = 0;
const start = () => {
  intervalo = setInterval(() => {
    scrollLeft += step;
    carrusel.scrollLeft = scrollLeft;
    if (scrollLeft === maxScrollLeft) {
      step *= -1;
    } else if (scrollLeft == 0) {
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


