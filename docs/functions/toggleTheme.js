import { body, sudokuContainer, allButtons, descriptionDiv } from '../GlobalVariables.js';
export const toggleTheme = () => {
    const buttons = document.querySelectorAll('button');
    // bg colour
    body.classList.toggle('dark_bg');
    body.classList.toggle('light_bg');
    // sudoku container
    sudokuContainer.classList.toggle('light_button_bg');
    sudokuContainer.classList.toggle('dark_button_bg');
    // buttons
    allButtons.forEach(button => {
        button.classList.toggle('light_button_bg');
        button.classList.toggle('dark_button_bg');
    });
    // description
    descriptionDiv.classList.toggle('light_mode');
    descriptionDiv.classList.toggle('dark_mode');
};