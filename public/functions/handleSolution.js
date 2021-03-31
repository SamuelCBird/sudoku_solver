import { SolvePuzzle } from "../classes/SolvePuzzle.js";
import { puzzleArray } from "../GlobalVariables.js";
export const handleSolution = () => {
    for (let i = 0; i < puzzleArray.length; i++) {
        if (puzzleArray[i][0].classList.contains('invalid')) {
            // error
            return;
        }
    }
    puzzleArray.forEach(square => {
        square[0].contentEditable = 'false';
    });
    let worker;
    if (window.Worker) {
        worker = new Worker('workers/worker.js');
        worker.onmessage = (message) => {
            console.log(message);
        };
        worker.postMessage({
            'solvePuzzle': JSON.stringify(SolvePuzzle),
            'puzzleArray': JSON.stringify(puzzleArray)
        });
    }
};
