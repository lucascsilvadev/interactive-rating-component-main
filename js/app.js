const options = document.querySelectorAll('.grades__option');

options.forEach(option => {
    option.addEventListener('click', () => {
       updateSelection(option);
       updateOptionsStyle();
    });
    
})







function updateSelection(option) {
    option.dataset.selected = "true";
    for (let i = 0; i < options.length; i++) {
     if (options[i].getAttribute('id') !== option.getAttribute('id')) {
         options[i].setAttribute("data-selected", "false");
     }
    }
}

function updateOptionsStyle() {
   options.forEach((option) => {
    const isSelected = option.dataset.selected === "true" ? true : false;
    option.style.backgroundColor = isSelected ? "hsl(25, 97%, 53%)": "#35424f";
    option.style.color = isSelected ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)";
   });
}

