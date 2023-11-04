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
        if (option.innerHTML === selectedGrade) {
            // option.style.backgroundColor = "hsl(25, 97%, 53%)"
            // option.style.color = "hsl(0, 0%, 100%)";
            option.classList.remove('grades__option');
            option.classList.add('grades__option-selected')
        } else {
            option.classList.remove('grades__option-selected');
            option.classList.add('grades__option');
        }
    });
}

function updateSelectedRadioButton() {
    radioButtons.forEach((radioButton) => {
        if (selectedGrade === radioButton.value) {
            radioButton.checked = "true";
        }
    });
}

