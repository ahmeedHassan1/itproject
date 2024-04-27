function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const currentIndex = Array.from(slides).findIndex(slide => slide.style.display !== 'none');
    const nextIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'none';
    slides[nextIndex].style.display = 'block';
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const currentIndex = Array.from(slides).findIndex(slide => slide.style.display !== 'none');
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].style.display = 'none';
    slides[prevIndex].style.display = 'block';
}