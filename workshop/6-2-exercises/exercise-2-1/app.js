// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

let board = document.getElementById('board');
board.style.width = '600px';
board.style.height = '600px';
board.style.gridTemplateColumns = 'repeat(2, 1fr)';
board.style.gridTemplateRows = 'repeat(2, 1fr)';
board.style.gridGap = '2px';
board.style.border = '2px solid grey';

let cell0 = document.createElement('div');
cell0.classList.add('cell');
cell0.setAttribute('id', 'cell-0')
board.appendChild(cell0);

let cell1 = document.createElement('div');
cell1.classList.add('cell');
cell1.setAttribute('id', 'cell-1')
board.appendChild(cell1);

let cell2 = document.createElement('div');
cell2.classList.add('cell');
cell2.setAttribute('id', 'cell-2')
board.appendChild(cell2);

let cell3 = document.createElement('div');
cell3.classList.add('cell');
cell3.setAttribute('id', 'cell-3')
board.appendChild(cell3);