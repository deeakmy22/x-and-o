const playerX = "X";
const playerO = "O";
let turn = playerX;
let gameOver = false;

const boardElement = document.getElementById("board");
const startButton = document.getElementById("startButton");
const currentPlayer = document.getElementById("currentPlayer");
const gameOverArea = document.getElementById("gameOverArea");
const gameOverText = document.getElementById("gameOverText");
const winnerElement = document.getElementById("winner");
const restartButton = document.getElementById("restartButton");

function startGame() {
  startButton.style.display = "none";
  displayArray();
}

const colLine = 3;
let boxes = [];

function displayArray() {
  for (var i = 0; i < colLine * colLine; i++) {
    boxes[i] = null;
    let cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = i;
    boardElement.append(cellElement);
    cellElement.addEventListener("click", writingSymbol);
  }
  currentPlayer.innerText = "Turn: " + turn;
}

function writingSymbol(event) {
  let curentSquare = document.getElementById(event.target.id);
  if (!(boxes[event.target.id] === null) || gameOver) {
    return;
  }
  if (turn === playerO) {
    curentSquare.innerText = playerO;
    boxes[event.target.id] = playerO;
    turn = playerX;
  } else {
    curentSquare.innerText = playerX;
    boxes[event.target.id] = playerX;
    turn = playerO;
  }
  currentPlayer.innerText = "Turn: " + turn;
  checkWinner();
}

function checkWinner() {
  if (winnerLine(playerO)) {
    showWinner("The winner is: " + playerO);
  } else if (winnerLine(playerX)) {
    showWinner("The winner is: " + playerX);
  } else if (boxes.every((element) => element !== null)) {
    showWinner("It's a tie");
  }
}
const lineElement = document.getElementById("winningLine");

function showWinningLine(winningLine) {
  lineElement.classList.remove("hidden");
  lineElement.classList.add(winningLine);
}

function winnerLine(player) {
  if (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] === player) {
    showWinningLine("winningLine1");
    return true;
  }
  if (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] === player) {
    showWinningLine("winningLine2");
    return true;
  }
  if (boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] === player) {
    showWinningLine("winningLine3");
    return true;
  }
  if (boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] === player) {
    showWinningLine("winningLine4");
    return true;
  }
  if (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] === player) {
    showWinningLine("winningLine5");
    return true;
  }
  if (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] === player) {
    showWinningLine("winningLine6");
    return true;
  }
  if (boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] === player) {
    showWinningLine("winningLine7");
    return true;
  }
  if (boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] === player) {
    showWinningLine("winningLine8");
    return true;
  }
  return false;
}

function showWinner(resultText) {
  gameOverArea.style.display = "block";
  gameOverText.innerText = "Game Over!";
  winnerElement.innerText = resultText;
  gameOver = true;
}

function restartGame() {
  location.reload();
}
