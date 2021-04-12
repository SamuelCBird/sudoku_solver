import { errorMessageDiv, NumberType, PuzzleArrayType } from "../GlobalVariables.js";

export const clearBoard = (puzzle: PuzzleArrayType) => {
    puzzle.forEach(square => {
        square[0].innerText = '';
        square[0].contentEditable = 'true';
        square[1] = NumberType.empty;
        if (square[0].classList.contains('invalid')) {
            square[0].classList.remove('invalid');
        }
        errorMessageDiv.innerHTML = '';
    })
}