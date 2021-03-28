import { PuzzleArrayType, PuzzleSquare, NumberType } from "../GlobalVariables.js";

export class SolvePuzzle {
    constructor (private puzzle: PuzzleArrayType) {
        this.startSolution();
    };

    checkHorizontalValidity(value: HTMLDivElement, index: number): boolean {
        console.log('HORIZ')

        let i = index;
        if (i < 9) {
            i = 0;
        } else {
            while (i % 9 != 0) {
                i -= 1;
            }
        }
        
        let slice: PuzzleArrayType = this.puzzle.slice(i, i + 9);
        for (let j = 0; j < slice.length; j++) {
            if (value != slice[j][0]) {
                if (value.innerText === slice[j][0].innerText) {
                    // console.log(`${value.innerText} / ${elem[0].innerText}`)
                    return false;
                }
            }
        }
        return true;
    }

    checkVerticalValidity(value: HTMLDivElement, index: number): boolean {
        console.log('VERT')

        let i = index;
        if (i > 8) {
            while (i - 9 >= 0) {
                i -= 9;
            }
        }
        for (i; i <= this.puzzle.length - 1; i += 9) {
            if (value != this.puzzle[i][0]) {
                if (value.innerText === this.puzzle[i][0].innerText) {
                    return false;
                }
            }
        }
        return true;
    }

    checkBlockValidity(value: HTMLDivElement, index: number): boolean {
    console.log('BLOCK')

        const blockCornerNumbers = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        let targetBlock: number;
        // get the right block of 9
        for (let j = 0; j < blockCornerNumbers.length; j++) {
            for (let k = blockCornerNumbers[j]; k < (blockCornerNumbers[j] + 20); k + 9) {
                for (let m = k; m < k + 3; m++) {
                    if (index === m) {
                        targetBlock = blockCornerNumbers[j];
                    }
                }
            }
        }
        // check for number
        for (let k = targetBlock!; k < (k + 21); k + 9){
            for (let m = k; m < k + 3; m++) {
                if (parseInt(value.innerText) === m) {
                    return false;
                }
            }
        }
        return true;
    }

    startSolution(): void {
        let i = 0;
        while (i < this.puzzle.length) {
            console.log(i)
            // this.puzzle[i][0].classList.add('active_square')
            if (this.squareIsEditable(this.puzzle[i])) {
                if (this.insertNumber(this.puzzle[i][0], i)) {
                    i += 1;
                } else {
                    i -= 1;
                }
            } else {
                i += 1;
            }
        }
    }

    isValid(value: HTMLDivElement, index: number): boolean {
        if (this.checkHorizontalValidity(value, index)) { 
            if (this.checkVerticalValidity(value, index)) {
                if (this.checkBlockValidity(value, index)) {
                    return true;
                }
            }
        }
        return false;
    }

    insertNumber(square: HTMLDivElement, index: number): boolean {
        let newNumber: number;
        if (!square.innerText) {
            newNumber = 0;
        } else {
            newNumber = parseInt(square.innerText);
        }
        if (newNumber < 9) {
            newNumber += 1;
        } else {
            return false;
        }
        square.innerText = newNumber.toString();
        if (this.isValid(square, index)) {
            return true;
        }
        return false;
    }

    squareIsEditable(square: PuzzleSquare): boolean {
        return (square[1] === NumberType.empty);
    }  
};