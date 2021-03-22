import { PuzzleArrayType, PuzzleSquare, NumberType } from "../GlobalVariables.js";

export class SolvePuzzle {
    constructor (private puzzle: PuzzleArrayType) {
        this.startSolution();
    };

    startSolution(): void {
        for (let i = 0; i < this.puzzle.length; i++) {
            // this.puzzle[i][0].classList.add('active_square')
            if (this.squareIsEditable(this.puzzle[i])) {
                if (!this.insertNumber(this.puzzle[i][0], i)) {
                    i -= 2;
                }
            } 
        }
    }

    isValid(value: HTMLDivElement, index: number): boolean {
        // check horizontally
        let i = index;
        while (i % 9 != 0) {
            i -= 1;
        }
        let slice: PuzzleArrayType = this.puzzle.slice(i, i + 10);
        slice.forEach(elem => {
            if (value != elem[0]) {
                if (value.innerText == elem[0].innerText) {
                    return false;
                }
            }
        })
        // check vertically
        i = index;
        if (i > 8) {
            while (i - 9 >= 0) {
                i -= 9;
                // console.log(i)
            }
        }
        for (i; i <= this.puzzle.length - 1; i += 9) {
            // console.log(this.puzzle[i][0], i)
            if (value != this.puzzle[i][0]) {
                if (value.innerText == this.puzzle[i][0].innerText) {
                    return false;
                }
            }
        }
        return true;
    }

    insertNumber(square: HTMLDivElement, index: number): boolean {
        if (square.innerText) {
            if (parseInt(square.innerText) >= 9) {
                for (let i = 1; i < 9; i++) {
                    const newNumber = parseInt(square.innerText) + 1;
                    square.innerText = newNumber.toString();
                    return this.isValid(square, index);
                }
            }
        } else {
            square.innerText = '1';
            return this.isValid(square, index);
        }
        return false;
    }

    squareIsEditable(square: PuzzleSquare): boolean {
        return (square[1] == NumberType.empty);
    }  
};