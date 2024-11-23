const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 5000; 

function pokazfotke(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nastepnyslajd() {
    currentIndex = (currentIndex + 1) % slides.length; 
    pokazfotke(currentIndex);
}

// Inicjalizacja slidera
pokazfotke(currentIndex);
setInterval(nastepnyslajd, slideInterval);
