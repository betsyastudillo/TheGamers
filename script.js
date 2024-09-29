// NAVBAR
const menuToggler = document.getElementById('menu-toggler').addEventListener('click', function () {
  const menu = document.getElementById('navbarMenu');
  const content = document.querySelector('#videoPpal');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    content.style.marginTop = '0';
  } else {
    menu.style.display = 'flex';
    // content.style.marginTop = '200px';
  }
});

// CARRUSEL
const carouselData = [
  {
    imgSrc: "img/fifa.jpg",
    title: "FIFA 25",
    priceCompare: "COP 219.900",
    itemPrice: "COP 159.900",
  },
  {
    imgSrc: "img/mortalkombatjpg.jpg",
    title: "Mortal Kombat",
    priceCompare: "COP 219.900",
    itemPrice: "COP 159.900",
  },
  {
    imgSrc: "img/resident2.jpg",
    title: "Resident 2",
    priceCompare: "COP 199.900",
    itemPrice: "COP 44.900",
  },
  {
    imgSrc: "img/Reposamuñecas.JPG",
    title: "DELTAHUB Carpio 2.0 - Reposamuñecas",
    priceCompare: "COP 199.900",
    itemPrice: "COP 100.000",
  },
  {
    imgSrc: "img/silla.jpg",
    title: "Silla Gamer Xtreme",
    priceCompare: "COP 939.000",
    itemPrice: "COP 600.900",
  },
  {
    imgSrc: "img/mouse.jpg",
    title: "Mouse Logitech G502 Gaming Hero Black USB",
    priceCompare: "COP 399.900",
    itemPrice: "COP 249.900",
  },
  {
    imgSrc: "img/monitor.jpg",
    title: "Monitor de 27 pulgadas",
    priceCompare: "COP 839.880",
    itemPrice: "COP 699.900",
  },
  {
    imgSrc: "img/juegoIvanichi.jpg",
    title: "Zetus",
    priceCompare: "COP 500.880",
    itemPrice: "COP 100.200",
  },
  {
    imgSrc: "img/auriculares.JPG",
    title: "Auriculares G733 Audifonos Inalambricos con Microfono Azul",
    priceCompare: "COP 999.900",
    itemPrice: "COP 839.880",
  },
  {
    imgSrc: "img/teclado.jpg",
    title: "KBG560 Teclado Gamer Mecánico 60%",
    priceCompare: "COP 199.900",
    itemPrice: "COP 80.900",
  },
];
let currentIndex = 0;

// Actualiza el contenido del carrusel
function updateCarousel(index) {
  const imgElement = document.getElementById("carousel-img");
  const titleElement = document.getElementById("carousel-title");
  const priceCompareElement = document.getElementById("carousel-price-compare");
  const itemPriceElement = document.getElementById("carousel-item-price");

  // Actualizar el contenido basado en el índice actual
  imgElement.src = carouselData[index].imgSrc;
  titleElement.textContent = carouselData[index].title;
  priceCompareElement.textContent = carouselData[index].priceCompare;
  itemPriceElement.textContent = carouselData[index].itemPrice;
}

// Función para ir al siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselData.length;
  updateCarousel(currentIndex);
}

// Iniciar el carrusel automático con un intervalo de tiempo
const autoSlideInterval = 3000; // 3000 ms = 3 segundos
setInterval(nextSlide, autoSlideInterval);

// Puedes seguir usando botones si quieres avanzar manualmente:
function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  updateCarousel(currentIndex);
}

// FORMULARIO
const checkbox = document.getElementById('validationCheckbox');
const cap = document.getElementById('captcha');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        cap.style.display = 'block';
    }else{
        cap.style.display = 'none';
        
    }
});

window.onload = function() {
    document.getElementById('submitButton').disabled = true;
}

