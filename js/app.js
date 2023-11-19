const options = document.querySelectorAll('.grades__option');
const submitButton = document.querySelector('.grades__button');
const radioButtons = document.querySelectorAll('.grades__radio');
const gradesForm = document.querySelector('.grades');
const warning = document.querySelector('.card__warning');
let selectedGrade = '';

options.forEach(option => {
    option.addEventListener('click', () => {
        updateOptionSelection(option);
        updateOptionsStyle();
        updateSelectedRadioButton();
    });

})

gradesForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (selectedGrade === '') { 
        showWarning();

    } else {
        UpdatesGradesOptionsContent();
        hideWarning(); 
    }
    
    
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

function UpdatesGradesOptionsContent() {
    hideIcon();
    switchText();
    hideGrades();
    hideSubmitButton();
    addIllustration();
    addResult();
}

function hideIcon() {
    const icon = document.querySelector('.card__icon');
    icon.setAttribute('style', 'display: none;')
}

function switchText() {
    const title = document.querySelector('.card__title');
    title.style.textAlign = 'center';
    title.innerHTML = 'Thank you!';

    const text = document.querySelector('.card__text');
    text.style.textAlign = 'center';
    text.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!'
}

function hideGrades() {
    options.forEach(option => {
        option.setAttribute('style', 'display: none;');
    })
}

function hideSubmitButton() {
    submitButton.style.display = 'none';
}

function addIllustration() {
    const illustration = document.querySelector('.card__image');
    illustration.style.display = 'inline-block';
}

function addResult() {
    const result = document.querySelector('.card__result');
    result.innerHTML = `You selected ${selectedGrade} out of 5`;
    result.style.display = 'inline-block';
    
}

function showWarning() {
    warning.style.display = 'inline-block';
}

function hideWarning() {
    warning.style.display = 'none';
}

