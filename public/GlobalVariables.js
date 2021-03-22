export const body = document.querySelector('body');
export const themeButton = document.querySelector('#theme_switcher');
export const solveButton = document.querySelector('#solve_button');
export const allButtons = document.querySelectorAll('button');
export const sudokuContainer = document.getElementById('sudoku_container');
export const errorMessageDiv = document.querySelector('error_message');
// array to hold sudoku divs, NumberType to hold whether number was preset or not
export const divArray = [];
export var NumberType;
(function (NumberType) {
    NumberType[NumberType["locked"] = 0] = "locked";
    NumberType[NumberType["empty"] = 1] = "empty";
})(NumberType || (NumberType = {}));
