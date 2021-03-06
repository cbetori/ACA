'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
function switchPlayer() {
  if (playerTurn === 'X') {
    playerTurn = 'O'
    return playerTurn
  } else {
    playerTurn = 'X'
    return playerTurn
  }
}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() { 
  for (let i = 0; i < 3; i++) {
    let counter = 0;
    for (let x = 0; x < 3; x++) {
      if (board[i][x] === playerTurn) {
        counter = counter + 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
}

function verticalWin() {
  for (let i = 0; i < 3; i++) {
    let counter = 0;
    for (let x = 0; x < 3; x++) {
      if (board[x][i] === playerTurn) {
        console.log(board);
        counter = counter + 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
}

function diagonalWin() {
  console.log(board);
  if (
    (board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) ||
    (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)
  ) {
    return true;  
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(playerTurn + ' Wins')
    return true;
  }
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  checkForWin();
  switchPlayer();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
};

//getPrompt();

module.exports= {
  ticTacToe,
  board,
  horizontalWin,
  verticalWin,
  diagonalWin,
  checkForWin,
}


// Tests

//if (typeof describe === 'function') {

//} else {

 // getPrompt();

//}
