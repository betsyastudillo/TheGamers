const carousel = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length; 
  carousel.style.transform = `translateX(-${currentIndex * 17}%)`;
}, 2000); 
