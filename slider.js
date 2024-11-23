const slajdy = document.querySelectorAll('.slide');
const kropki = document.querySelectorAll('.dot');
let aktualnyIndeks = 0;

function aktualizujSlider() {
    // Przesuwanie slajdów
    const przesuniecie = -aktualnyIndeks * 100;
    document.querySelector('.slider').style.transform = `translateX(${przesuniecie}%)`;

    // Aktualizacja aktywnej kropki
    kropki.forEach(kropka => kropka.classList.remove('active'));
    kropki[aktualnyIndeks].classList.add('active');
}


setInterval(() => {
    aktualnyIndeks = (aktualnyIndeks + 1) % slajdy.length;
    aktualizujSlider();
}, 2500);

aktualizujSlider();

// Dodaj nasłuchiwanie zdarzenia na kropkach dla ręcznej nawigacji
kropki.forEach((kropka, indeks) => {
    kropka.addEventListener('click', () => {
        aktualnyIndeks = indeks;
        aktualizujSlider();
    });
});
