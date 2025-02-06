let currentIndex = 0;
const totalSlides = 5; // Number of images

function moveSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    const slide = document.querySelector('.carousel-wrapper');
    slide.style.transform = `translateX(-${currentIndex * 20}%)`; // 20% per image
}
