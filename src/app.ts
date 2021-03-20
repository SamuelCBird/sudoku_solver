// light / dark theme
const body = document.querySelector('body')!;
const themeButton = document.querySelector('#theme_switcher') as HTMLButtonElement;
const allButtons = document.querySelectorAll('button');

const toggleTheme = (): void => {
    // bg colour
    body.classList.toggle('dark_bg')
    body.classList.toggle('light_bg')
    // buttons
    allButtons.forEach(button => {
        button.classList.toggle('button_dark_theme');
        button.classList.toggle('button_light_theme');
    })
    // toggle theme button text
    themeButton.innerText === 'go dark' ? themeButton.innerText = 'go light' : themeButton.innerText = 'go dark' ;
}

themeButton.addEventListener('click', toggleTheme);

// put divs in array, and make divs editable.
const sudokuContainer = document.getElementById('sudoku_container')!;
const divArray: HTMLDivElement[] = [];

for (let i = 0; i < sudokuContainer.childElementCount; i += 1) {
    const currentElement = sudokuContainer.children[i] as HTMLDivElement;
    currentElement.contentEditable = "true";
    currentElement.addEventListener('input', () => {
        
        // not working right yet.
        if (!/\d /.test(currentElement.innerText)) {
            currentElement.classList.add('error');
        }
    divArray.push(currentElement);
    });
}