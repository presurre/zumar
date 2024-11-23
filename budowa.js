// Obsługa otwierania modala
const steps = document.querySelectorAll('.process-step');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');

// Szczegóły etapów budowy
const stepDetails = {
    1: {
        title: "Planowanie",
        image: "planowanie.jpg",
        description: "Tutaj widzimy się z Państwem poraz pierwszy. Razem, rozmawiamy, Państwo przedstawiają wizję swojego domu marzeń, a my chętnie pomożemy zrealizować ten cel!"
    },
    2: {
        title: "Formalności i uzyskiwanie pozwoleń",
        image: "formalnosci.png",
        description: "Widzimy się z Państwem ponownie, rozmawiamy o kwestiach formalnych odnośnie budowy. Następnie, pomagamy państwu z innymi formalnościami czyt. pozwoleniami."
    },
    3: {
        title: "Podpisywanie umowy",
        image: "podpis.png",
        description: "Wielkopomna chwila! Dajemy Państwu wgląd do umowy, by na spokojnie z nią się zapoznać, by moć kilka razy ją przeczytać, bez stresu.  "
    },
    4: {
        title: "Przygotowanie terenu",
        image: "koparka2.png",
        description: "Po podpisaniu z Państwem umowy, od razu bierzemy się do pracy. Zaczynamy od przygotowania terenu, szczególnie w miejscu, w którym będzie budynek, odpowiednio wykopujemy pod fundamenty, a następnie zabezpieczamy (przy użyciu folii, styropianu/styroduru, zbrojenie itp.)"
    },
    5: {
        title: "Fundamenty",
        image: "fundamenty.jpg",
        description: "Zaczynamy etap wylewania płyty fundamentowej. Jest to specjalna płyta, przygotowana pod właśnie domy, które dla Was budujemy. Na wcześniej przygotowanym miejscu, zaczynamy wylewkę, następnie dbając o fundament, by beton dobrze się związał."
    },
    6: { 
        title:"Sciany", 
        image:"sciany.jpg",
        description:"Na wcześniej wylaną płytę, po minięciu odpowiedniej ilości czasu, zaczynamy stawiać gotowe ściany, które są wcześniej przez nas przygotowane. Proces ten jest błyskawiczny, bo trwa do 2 godzin. Dzięki temu, można już ujrzeć zarys Naszego Domu Marzeń! "
    },
    7: {
        title:"Dach",
        image:"dach.jpg",
        description:"W miarę możliwości, jak najszybciej rozpoczynamy pracę nad tzw. wieńcem, by usztywnić naszą konstrukcję. W międzyczasie zaczynamy montaż płyt Steico na ścianach zewnętrznych, co widać na zdjęciu podglądowym. Następnie, zaczynamy montaż konstrukcji dachowej - wiązarów." 
    }, 
    8: {
        title:"Etap wykończenia",
        image:"", 
        description:"mhm"
    }
};

// Obsługa kliknięcia na etapy
steps.forEach(step => {
    step.addEventListener('click', () => {
        const stepId = step.dataset.step;
        modalTitle.textContent = stepDetails[stepId].title;
        modalImage.src = stepDetails[stepId].image;
        modalDescription.textContent = stepDetails[stepId].description;
        modal.style.display = 'flex';
    });
});

// Zamknięcie modala
function closeModal() {
    modal.style.display = 'none';
}
