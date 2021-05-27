export const body = document.querySelector('body')!;
export const themeButton = document.querySelector('#card') as HTMLDivElement;
export const solveButton = document.querySelector('#solve_button') as HTMLButtonElement;
export const clearButton = document.querySelector('#clear_button') as HTMLButtonElement;
export const clearButtonTextElem = document.querySelector("#clear_button > span") as HTMLSpanElement;
export const allButtons = document.querySelectorAll('button');
export const sudokuContainer = document.getElementById('sudoku_container') as HTMLDivElement;
export const errorMessageDiv = document.querySelector('#error_message') as HTMLDivElement;
export const descriptionDiv = document.querySelector('#description') as HTMLDivElement;

export const toggleClearButtonText = () => {
    if (clearButtonTextElem.innerText === 'clear') {
        clearButtonTextElem.innerText = 'stop';
    } else {
        clearButtonTextElem.innerText = 'clear';
    }
}

// array to hold sudoku divs, NumberType to hold whether number was preset or not
export type PuzzleArrayType = Array<[HTMLDivElement, NumberType]>;
export type PuzzleSquare = [HTMLDivElement, NumberType];

export const puzzleArray: PuzzleArrayType = [];

export enum NumberType {
    locked,
    empty
}