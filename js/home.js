document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Caption Rotation
    const heroCaptions = [
        "Advancing structural integrity, materials science engineering, and high-throughput mechanical characterization at the University of Toledo.",
        "Pushing fatigue testing beyond 10 million cycles with our high-temperature ultrasonic fatigue tester.",
        "Partnering with the Air Force and NASA to test the alloys of tomorrow's aerospace structures.",
        "Training the next generation of materials engineers through hands-on graduate research."
    ];

    let heroIndex = 0;
    const heroCaptionEl = document.getElementById('heroCaption');

    if (heroCaptionEl) {
        setInterval(() => {
            heroIndex = (heroIndex + 1) % heroCaptions.length;
            heroCaptionEl.style.opacity = '0';
            setTimeout(() => {
                heroCaptionEl.textContent = heroCaptions[heroIndex];
                heroCaptionEl.style.opacity = '1';
            }, 400);
        }, 5000);
    }

    // 2. Lab Updates Slideshow
    let slideIndex = 1;
    const slides = document.getElementsByClassName("mySlides");

    function showDivs(n) {
        if (!slides.length) return;
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    showDivs(slideIndex);

    window.plusDivs = function(n) {
        showDivs(slideIndex += n);
    };
});