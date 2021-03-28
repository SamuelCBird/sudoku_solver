import { handleSolution } from './functions/handleSolution.js';
import { toggleTheme } from './functions/toggleTheme.js';
import { themeButton, sudokuContainer, NumberType, solveButton, puzzleArray } from './GlobalVariables.js';

// toggle theme
themeButton.addEventListener('click', toggleTheme);
solveButton.addEventListener('click', handleSolution);



// create divs
for (let i = 0; i < 81; i++) {
    const elem = document.createElement('div');
    elem.contentEditable = 'true';

    // check for valid input
    elem.addEventListener('input', () => {
        if (elem.innerText === '') {
            if (elem.classList.contains('invalid')) {
                elem.classList.remove('invalid');
            }
        }
        if (/\D/.test(elem.innerText)) {
            elem.classList.add('invalid');
        } else if (elem.innerText.length >= 2) {
            elem.classList.add('invalid');
        } else {
            if (elem.classList.contains('invalid')) {
                elem.classList.remove('invalid');
            } 
        }
    })
    puzzleArray.push([elem, NumberType.empty]);
    sudokuContainer.append(elem);
}
