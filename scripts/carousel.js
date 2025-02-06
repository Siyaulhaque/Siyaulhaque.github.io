let currentIndex = 0;
function moveSlide(direction) {
    const slide = document.querySelector('.carousel-wrapper');
    const totalImages = document.querySelectorAll('.carousel-slide img').length;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalImages - 1;
    if (currentIndex >= totalImages) currentIndex = 0;
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
