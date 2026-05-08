console.log("Landing Page lista");

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        const offset = 80; // altura navbar

        const sectionPosition =
            targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

    });

});

// Get the current URL
//var currentUrl = window.location.href;