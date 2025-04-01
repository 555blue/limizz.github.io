const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const unactive = document.getElementById('unactive');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(unactive){
    unactive.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        const totalSlides = images.length;
        let index = 0;document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slides.style.transform = 'translateX(-'+(index * 100)+'%)';
    }

    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    }, 3000);

    

    
