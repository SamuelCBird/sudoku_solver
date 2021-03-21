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
// create divs, put in array
const sudokuContainer = document.getElementById('sudoku_container');
const divArray = [];
for (let i = 0; i < 81; i++) {
    const elem = document.createElement('div');
    elem.contentEditable = 'true';
    elem.addEventListener('input', () => {
        if (elem.innerText == '') {
            if (elem.classList.contains('error')) {
                elem.classList.remove('error');
            }
        }
        if (/\D/.test(elem.innerText)) {
            elem.classList.add('error');
            console.log('yo');
        }
        else if (elem.innerText.length >= 2) {
            elem.classList.add('error');
        }
        else {
            if (elem.classList.contains('error')) {
                elem.classList.remove('error');
            }
        }
    });
    divArray.push([elem, '']);
    sudokuContainer.append(elem);
}
