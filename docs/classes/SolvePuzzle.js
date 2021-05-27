import { NumberType, toggleClearButtonText } from "../GlobalVariables.js";
export class SolvePuzzle {
    constructor(puzzle, stopper = false, isSolving = true) {
        this.puzzle = puzzle;
        this.stopper = stopper;
        this.isSolving = isSolving;
        toggleClearButtonText();
        // clear function can access stop and make it true to stop loop
        this.startSolution();
        isSolving = false;
    }
    ;
    checkHorizontalValidity(value, index) {
        let i = index;
        if (i < 9) {
            i = 0;
        }
        else {
            while (i % 9 !== 0) {
                i -= 1;
            }
        }
        let slice = this.puzzle.slice(i, i + 9);
        for (let j = 0; j < slice.length; j++) {
            slice[j][0].classList.toggle('active_checking_square');
            if (value !== slice[j][0]) {
                if (value.innerText === slice[j][0].innerText) {
                    slice[j][0].classList.toggle('active_checking_square');
                    return false;
                }
            }
            slice[j][0].classList.toggle('active_checking_square');
        }
        return true;
    }
    checkVerticalValidity(value, index) {
        let i = index;
        if (i > 8) {
            while (i - 9 >= 0) {
                i -= 9;
            }
        }
        for (i; i <= this.puzzle.length - 1; i += 9) {
            this.puzzle[i][0].classList.toggle('active_checking_square');
            if (value !== this.puzzle[i][0]) {
                if (value.innerText === this.puzzle[i][0].innerText) {
                    this.puzzle[i][0].classList.toggle('active_checking_square');
                    return false;
                }
            }
            this.puzzle[i][0].classList.toggle('active_checking_square');
        }
        return true;
    }
    checkBlockValidity(value, index) {
        const block = [
            [0, 1, 2, 9, 10, 11, 18, 19, 20],
            [3, 4, 5, 12, 13, 14, 21, 22, 23],
            [6, 7, 8, 15, 16, 17, 24, 25, 26],
            [27, 28, 29, 36, 37, 38, 45, 46, 47],
            [30, 31, 32, 39, 40, 41, 48, 49, 50],
            [33, 34, 35, 42, 43, 44, 51, 52, 53],
            [54, 55, 56, 63, 64, 65, 72, 73, 74],
            [57, 58, 59, 66, 67, 68, 75, 76, 77],
            [60, 61, 62, 69, 70, 71, 78, 79, 80]
        ];
        // holds index of block
        let targetBlock;
        for (let j = 0; j < block.length; j++) {
            if (targetBlock === null) {
                break;
            }
            for (let k = 0; k < block[j].length; k++) {
                if (index === block[j][k]) {
                    targetBlock = j;
                    break;
                }
            }
        }
        for (let j = 0; j < block[targetBlock].length; j++) {
            if (this.puzzle[block[targetBlock][j]][0] !== value) {
                if (this.puzzle[block[targetBlock][j]][0].innerText === value.innerText) {
                    return false;
                }
            }
        }
        return true;
    }
    startSolution() {
        let index = 0;
        let previousIndex;
        let intervalLoop = setInterval(() => {
            // check for stopping
            if (index >= 80 || this.stopper) {
                clearInterval(intervalLoop);
                toggleClearButtonText();
            }
            if (this.squareIsEditable(this.puzzle[index])) {
                if (this.insertNumber(this.puzzle[index][0], index)) {
                    previousIndex = index;
                    index += 1;
                }
                else {
                    previousIndex = index;
                    index -= 1;
                }
            }
            else {
                if (previousIndex !== null) {
                    if (previousIndex === index + 1) {
                        previousIndex = index;
                        index -= 1;
                    }
                    else {
                        previousIndex = index;
                        index += 1;
                    }
                }
            }
        }, 10);
    }
    isValid(value, index) {
        if (this.checkHorizontalValidity(value, index)) {
            if (this.checkVerticalValidity(value, index)) {
                if (this.checkBlockValidity(value, index)) {
                    return true;
                }
            }
        }
        return false;
    }
    insertNumber(square, index) {
        let newNumber;
        if (square.innerText) {
            newNumber = parseInt(square.innerText);
        }
        else {
            newNumber = 0;
        }
        newNumber += 1;
        for (newNumber; newNumber <= 9; newNumber++) {
            square.innerText = newNumber.toString();
            if (this.isValid(square, index)) {
                return true;
            }
        }
        if (square.innerText === '9') {
            square.innerText = '';
        }
        return false;
    }
    squareIsEditable(square) {
        return (square[1] === NumberType.empty);
    }
}
;