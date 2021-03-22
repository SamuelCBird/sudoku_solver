import { divArray, NumberType } from "../GlobalVariables.js";
export const solveSudoku = () => {
    divArray.forEach(indivDiv => {
        indivDiv[0].contentEditable = 'false';
        if (indivDiv[0].innerText) {
            indivDiv[1] = NumberType.locked;
        }
    });
};
