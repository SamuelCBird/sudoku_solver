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
                console.log(i);
                i -= 1;
            }
        }
        
        let slice: PuzzleArrayType = this.puzzle.slice(i, i + 9);
        for (let j = 0; j < slice.length; j++) {
            slice[j][0].classList.toggle('active_checking_square');
            if (value != slice[j][0]) {
                if (value.innerText === slice[j][0].innerText) {
                    // console.log(`${value.innerText} / ${elem[0].innerText}`)
                    slice[j][0].classList.toggle('active_checking_square');
                    return false;
                }
            }
            slice[j][0].classList.toggle('active_checking_square');
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
            this.puzzle[i][0].classList.toggle('active_checking_square');
            if (value != this.puzzle[i][0]) {
                if (value.innerText === this.puzzle[i][0].innerText) {
                    this.puzzle[i][0].classList.toggle('active_checking_square');
                    return false;
                }
            }
            this.puzzle[i][0].classList.toggle('active_checking_square');
        }
        return true;
    }

    checkBlockValidity(value: HTMLDivElement, index: number): boolean {
    console.log('BLOCK')

        const blockCornerNumbers = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        let targetBlock: number;
        // get the right block of 9
        for (let j = 0; j < blockCornerNumbers.length; j++) {
            if (targetBlock! != null) { break; }
            for (let k = blockCornerNumbers[j]; k < (blockCornerNumbers[j] + 20); k += 9) {
                if (targetBlock! != null) { break; }
                for (let m = k; m < k + 3; m++) {
                    if (index === m) {
                        targetBlock = blockCornerNumbers[j];
                        break;
                    }
                }
            }
        }
        // check for number
        for (let k = targetBlock!; k < targetBlock! + 21; k += 9){
            for (let m = k; m < k + 3; m++) {
                this.puzzle[m][0].classList.toggle('active_checking_square');
                if (value != this.puzzle[m][0]) {
                    if (value.innerText === this.puzzle[m][0].innerText) {
                        this.puzzle[m][0].classList.toggle('active_checking_square');
                        return false;
                    }
                }
                this.puzzle[m][0].classList.toggle('active_checking_square');
            }
        }
        return true;
    }

    startSolution(): void {
        let i = 0;
        while (i < this.puzzle.length) {
            console.log(i)
            this.puzzle[i][0].classList.toggle('active_square');
            if (this.squareIsEditable(this.puzzle[i])) {
                if (this.insertNumber(this.puzzle[i][0], i)) {
                    this.puzzle[i][0].classList.toggle('active_square');
                    i += 1;
                } else {
                    this.puzzle[i][0].classList.toggle('active_square');
                    i -= 1;
                }
            } else {
                this.puzzle[i][0].classList.toggle('active_square');
                i += 1;
            }
        }
        console.log('COMPLETE');
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
        if (square.innerText) {
            newNumber = parseInt(square.innerText);
        } else {
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

    squareIsEditable(square: PuzzleSquare): boolean {
        return (square[1] === NumberType.empty);
    }  
};