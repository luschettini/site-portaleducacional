let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function slideLeft1() {
  const cardsContainer = document.querySelector(".noticia-container-1 .cards");
  const totalCards = document.querySelectorAll(".noticia-container-1 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".noticia-container-1 .card").offsetWidth + 20; 

  if (currentIndex1 > 0) {
    currentIndex1--;
  } else {
    currentIndex1 = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex1, cardWidth);
}

function slideRight1() {
  const cardsContainer = document.querySelector(".noticia-container-1 .cards");
  const totalCards = document.querySelectorAll(".noticia-container-1 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".noticia-container-1 .card").offsetWidth + 20; 

  if (currentIndex1 < totalCards - visibleCards) {
    currentIndex1++;
  } else {
    currentIndex1 = 0;
  }

  updateSlide(cardsContainer, currentIndex1, cardWidth);
}

function slideLeft2() {
  const cardsContainer = document.querySelector(".noticia-container-2 .cards");
  const totalCards = document.querySelectorAll(".noticia-container-2 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".noticia-container-2 .card").offsetWidth + 20; 

  if (currentIndex2 > 0) {
    currentIndex2--;
  } else {
    currentIndex2 = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex2, cardWidth);
}

function noticiaight2() {
  const cardsContainer = document.querySelector(".noticia-container-2 .cards");
  const totalCards = document.querySelectorAll(".noticia-container-2 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".noticia-container-2 .card").offsetWidth + 20; 

  if (currentIndex2 < totalCards - visibleCards) {
    currentIndex2++;
  } else {
    currentIndex2 = 0;
  }

  updateSlide(cardsContainer, currentIndex2, cardWidth);
}

function slideLeft3() {
  const cardsContainer = document.querySelector(".slider-container-3 .cards");
  const totalCards = document.querySelectorAll(".slider-container-3 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".slider-container-3 .card").offsetWidth + 30; 

  if (currentIndex3 > 0) {
    currentIndex3--;
  } else {
    currentIndex3 = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex3, cardWidth);
}

function slideRight3() {
  const cardsContainer = document.querySelector(".slider-container-3 .cards");
  const totalCards = document.querySelectorAll(".slider-container-3 .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".slider-container-3 .card").offsetWidth + 30; 

  if (currentIndex3 < totalCards - visibleCards) {
    currentIndex3++;
  } else {
    currentIndex3 = 0;
  }

  updateSlide(cardsContainer, currentIndex3, cardWidth);
}

function updateSlide(container, index, cardWidth) {
  container.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Função para deslizar automaticamente
function autoSlide() {
  slideRight1();
  slideRight2();
  slideRight3();
}

// Configura o intervalo para mudar automaticamente
let slideInterval = setInterval(autoSlide, 4000); // Muda a cada 4 segundos (4000ms)

// Pausa o carrossel ao passar o mouse e retoma ao sair
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, 4000);
});