let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Show the first slide initially
slides[currentSlide].classList.add('active');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Set interval for automatic photo show
setInterval(nextSlide, 3000);
