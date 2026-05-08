// ================= LANDING PAGE =================

console.log("Landing Page lista");

// ================= NAVBAR SCROLL =================

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        const offset = 80;

        const sectionPosition =
            targetSection.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

    });

});

// ================= CAROUSEL =================

const track = document.getElementById("carouselTrack");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const slides = document.querySelectorAll(".carousel-slide");

let currentSlide = 0;

const totalSlides = slides.length;

// FUNCION ACTUALIZAR

function updateCarousel(){

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;

}

// BOTON NEXT

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= totalSlides){
        currentSlide = 0;
    }

    updateCarousel();

});

// BOTON PREV

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }

    updateCarousel();

});

// ================= AUTOPLAY OPCIONAL =================

// Cambia 5000 por el tiempo que quieras

setInterval(() => {

    currentSlide++;

    if(currentSlide >= totalSlides){
        currentSlide = 0;
    }

    updateCarousel();

}, 5000);