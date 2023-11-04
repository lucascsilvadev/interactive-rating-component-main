const options = document.querySelectorAll('.grades__option');
const submitButton = document.querySelector('.grades__button');
const radioButtons = document.querySelectorAll('.grades__radio');
let selectedGrade;

options.forEach(option => {
    option.addEventListener('click', () => {
        updateOptionSelection(option);
        updateOptionsStyle();
        updateSelectedRadioButton();
    });

})

submitButton.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
});


function updateOptionSelection(option) {
    option.dataset.selected = "true";
    selectedGrade = option.innerHTML;
    for (let i = 0; i < options.length; i++) {
        if (options[i].getAttribute('id') !== option.getAttribute('id')) {
            options[i].setAttribute("data-selected", "false");
        }
    }
}

function updateOptionsStyle() {
    options.forEach((option) => {
        const isSelected = option.dataset.selected === "true" ? true : false;
        option.style.backgroundColor = isSelected ? "hsl(25, 97%, 53%)" : "#35424f";
        option.style.color = isSelected ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)";
    });
}

function updateSelectedRadioButton() {
    radioButtons.forEach((radioButton) => {
        if (selectedGrade === radioButton.value) {
            radioButton.checked = "true";
        }
    });
}

