"use strict";
// light / dark theme
const body = document.querySelector('body');
const themeButton = document.querySelector('#theme_switcher');
const allButtons = document.querySelectorAll('button');
const toggleTheme = () => {
    // bg colour
    body.classList.toggle('dark_bg');
    body.classList.toggle('light_bg');
    // buttons
    allButtons.forEach(button => {
        button.classList.toggle('button_dark_theme');
        button.classList.toggle('button_light_theme');
    });
    // toggle theme button text
    themeButton.innerText === 'go dark' ? themeButton.innerText = 'go light' : themeButton.innerText = 'go dark';
};
themeButton.addEventListener('click', toggleTheme);
// put divs in array, and make divs editable.
const sudokuContainer = document.getElementById('sudoku_container');
const divArray = [];
for (let i = 0; i < sudokuContainer.childElementCount; i += 1) {
    const currentElement = sudokuContainer.children[i];
    currentElement.contentEditable = "true";
    currentElement.addEventListener('focus', (e) => {
        // not working right yet.
        if (currentElement.innerText == ' ') {
            if (currentElement.classList.contains('error')) {
                currentElement.classList.remove('error');
            }
        }
        if (/\D/.test(currentElement.innerText)) {
            currentElement.classList.add('error');
            console.log('yo');
        }
        else {
            console.log('hey');
        }
    });
    divArray.push(currentElement);
}
