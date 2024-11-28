let currentIndex1 = 0;

function slideLeft1() {
  const cardsContainer = document.querySelector(".slider-container .cards");
  const totalCards = document.querySelectorAll(".slider-container .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".slider-container .card").offsetWidth + 20; 

  if (currentIndex1 > 0) {
    currentIndex1--;
  } else {
    currentIndex1 = totalCards - visibleCards;
  }

  updateSlide(cardsContainer, currentIndex1, cardWidth);
}

function slideRight1() {
  const cardsContainer = document.querySelector(".slider-container .cards");
  const totalCards = document.querySelectorAll(".slider-container .card").length;
  const visibleCards = 3;
  const cardWidth = document.querySelector(".slider-container .card").offsetWidth + 20; 

  if (currentIndex1 < totalCards - visibleCards) {
    currentIndex1++;
  } else {
    currentIndex1 = 0;
  }

  updateSlide(cardsContainer, currentIndex1, cardWidth);
}


function updateSlide(container, index, cardWidth) {
  container.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Função para deslizar automaticamente
function autoSlide() {
  slideRight1();
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

//tire suas duvidas

function irParaPagina() {
  window.location.href = "sua-pagina-destino.html";
}
