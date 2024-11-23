window.onload = function() {
    // Po załadowaniu strony, ukrywamy loader z animacją
    const loader = document.getElementById('loader');
    setTimeout(function() {
        loader.classList.add('hidden'); 
    }, 1000); 
};

// Funkcja do wysyłania formularza kontaktowego
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pobieranie wartości z formularza
    let imie = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('phone').value;
    let wiadomosc = document.getElementById('message').value;

    // Walidacja, czy wszystkie pola są wypełnione
    if (imie && email && telefon && wiadomosc) {
        
        const loader = document.getElementById('loader');
        loader.classList.remove('hidden'); 
        setTimeout(function() {
            
            window.location.href = "formularz.html";
        }, 2400); 
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});



