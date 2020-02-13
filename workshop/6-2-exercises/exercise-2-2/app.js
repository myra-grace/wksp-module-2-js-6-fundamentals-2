// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

let board = document.getElementById('board');
board.style.width = '600px';
board.style.height = '600px';

let form = document.querySelector('form');
let rowsLabel = document.querySelector('.rows');
let rowsInput = document.getElementById('rows-input');
let columnsLabel = document.querySelector('.columns');
let columnsInput = document.getElementById('columns-input');

function makeSome() {
    board.innerHTML = '';
    let yourRow = parseInt(rowsInput.value);
    console.log('yourRow: ', yourRow);
    let yourColumn = parseInt(columnsInput.value)
    console.log('yourColumn: ', yourColumn);

    if (typeof yourRow !== 'number' || typeof yourColumn !== 'number') {
        console.log('not a number');
    } else {
        for (let i = 0; i < yourRow; i++) {
            let cellR = document.createElement('div');
            cellR.classList.add('cell');
            cellR.setAttribute('id', `cell-${i}`)
            board.appendChild(cellR);
        }
        for (let i = 0; i < yourColumn; i++) {
            let cellC = document.createElement('div');
            cellC.classList.add('cell');
            cellC.setAttribute('id', `cell-${i}`)
            board.appendChild(cellC);
        }
    }
    let rows = board.style.gridTemplateRows = `repeat(${yourRow}, 1fr)`;
    let columns = board.style.gridTemplateColumns = `repeat(${yourColumn}, 1fr)`;
    board.style.gridGap = '2px';
    board.style.border = '2px solid grey';
}

rowsInput.addEventListener('input', makeSome);
columnsInput.addEventListener('input', makeSome);