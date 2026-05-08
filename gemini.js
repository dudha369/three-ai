document.addEventListener("DOMContentLoaded", () => {
    // Ефект друкування тексту (Typewriter effect) для головного заголовку
    const titleText = "Привіт, я Gemini.";
    const titleElement = document.getElementById("typewriter");
    let i = 0;

    function typeWriter() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Запускаємо анімацію тексту з невеликою затримкою
    setTimeout(typeWriter, 500);

    // Intersection Observer для плавної появи елементів при скролінгу
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Анімуємо лише один раз
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});