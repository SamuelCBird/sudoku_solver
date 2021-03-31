// import { SolvePuzzle } from "../classes/SolvePuzzle.js";
// import { puzzleArray } from "../GlobalVariables.js";

onmessage = (e) => {
    // const solution = new SolvePuzzle(puzzleArray);
    const solver = e.data('solvePuzzle');
    const puzzle = e.data('puzzleArray');

    JSON.parse(solver);
    JSON.parse(puzzle);

    const solution = new solver(puzzle);
    console.log('done');
}