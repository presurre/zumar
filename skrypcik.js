// Wykrywanie przewijania, aby wyświetlić sekcje
document.addEventListener("DOMContentLoaded", () => {
    const revealSections = document.querySelectorAll(".reveal");
    const revealItems = document.querySelectorAll(".benefit-item");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // Punkt ujawniania

        // Dla sekcji
        revealSections.forEach((section) => {
            const elementTop = section.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // Dla elementów w sekcji
        revealItems.forEach((item, index) => {
            const delay = index * 100; // Opóźnienie animacji
            const elementTop = item.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                setTimeout(() => item.classList.add("reveal"), delay);
            } else {
                item.classList.remove("reveal");
            }
        });
    };

   
    window.addEventListener("scroll", revealOnScroll);

    // Uruchom raz po załadowaniu
    revealOnScroll();
});
