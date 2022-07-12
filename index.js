//QUERY MENU
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function () {
    nav.classList.toggle('active', window.scrollY > 0);
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activo");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


//QUERY CARD FRASES

(function () {
    const slider = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));

    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider_body---show')
            .dataset.id);

        value = currentElement;
        value += change;

        console.log(slider.length)
        if (value === 0 || value == slider.length + 1) {
            value = value === 0 ? slider.length : 1;

        }

        slider[currentElement - 1].classList.toggle('slider_body---show')
        slider[value - 1].classList.toggle('slider_body---show');
    }
})()

