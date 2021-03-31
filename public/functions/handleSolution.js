import { SolvePuzzle } from "../classes/SolvePuzzle.js";
import { NumberType, puzzleArray } from "../GlobalVariables.js";
export const handleSolution = () => {
    for (let i = 0; i < puzzleArray.length; i++) {
        if (puzzleArray[i][0].classList.contains('invalid')) {
            // error
            return;
        }
    }
    puzzleArray.forEach(square => {
        square[0].contentEditable = 'false';
        if (square[0].innerText !== '') {
            square[1] = NumberType.locked;
        }
    });
    const solution = new SolvePuzzle(puzzleArray);
    // possibly use worker to add counter and time solution
};
