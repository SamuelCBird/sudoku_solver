import { errorMessageDiv, NumberType, PuzzleArrayType } from "../GlobalVariables.js";
import { theSolution } from "./handleSolution.js";

export const clearBoard = (puzzle: PuzzleArrayType) => {
    if (typeof theSolution !== 'undefined') {
        if (theSolution.isSolving) {
            theSolution.stopper = true;
        } 
    }
    // set timeout to make sure everything gets cleared
    setTimeout(() => {
        puzzle.forEach(square => {
            square[0].innerText = '';
            square[0].contentEditable = 'true';
            square[1] = NumberType.empty;
            if (square[0].classList.contains('invalid')) {
                square[0].classList.remove('invalid');
            }
            errorMessageDiv.innerHTML = '';
        })
    }, 30)
}