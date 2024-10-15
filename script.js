
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        navList.style.animation = navList.classList.contains('active') ? 'fadeInMenu 0.3s ease forwards' : 'none';
    });


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
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Semua field harus diisi!");
        return false; // Mencegah pengiriman form
    }
    return true; // Mengizinkan pengiriman form
}