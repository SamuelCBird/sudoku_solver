export const body = document.querySelector('body')!;
export const themeCheckbox = document.querySelector('body > header > div > input[type=checkbox]') as HTMLInputElement;
export const solveButton = document.querySelector('#solve_button') as HTMLButtonElement;
export const allButtons = document.querySelectorAll('button');
export const sudokuContainer = document.getElementById('sudoku_container') as HTMLDivElement;
export const errorMessageDiv = document.querySelector('error_message') as HTMLDivElement;

// array to hold sudoku divs, NumberType to hold whether number was preset or not
export type PuzzleArrayType = Array<[HTMLDivElement, NumberType]>;
export type PuzzleSquare = [HTMLDivElement, NumberType];

export const puzzleArray: PuzzleArrayType = [];

export enum NumberType {
    locked,
    empty
}