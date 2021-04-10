export const body = document.querySelector('body');
// export const themeButton = document.querySelector('#theme_switcher') as HTMLButtonElement;
export const solveButton = document.querySelector('#solve_button');
export const allButtons = document.querySelectorAll('button');
export const sudokuContainer = document.getElementById('sudoku_container');
export const errorMessageDiv = document.querySelector('error_message');
export const puzzleArray = [];
export var NumberType;
(function (NumberType) {
    NumberType[NumberType["locked"] = 0] = "locked";
    NumberType[NumberType["empty"] = 1] = "empty";
})(NumberType || (NumberType = {}));
