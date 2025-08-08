const currentUser = document.querySelector(".current_user");
const gameBoard = document.querySelector(".game_board");
const resetBtn = document.querySelector("reset_btn");

let boardCell = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

currentUser.textContent = `현재 플레이어 : ${currentPlayer}`;

const playGame = () => {};

function resetBoard() {
  gameBoard.innerHTML = "";
  boardCell = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";

  for (let i = 0; i < boardCell.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.idx = i;
    gameBoard.appendChild(cell);
    cell.addEventListener("click", handleClick);
  }
}

// cell을 클릭 했을때 발생하는 이벤트
function handleClick(e) {
  const cellIdx = e.target.dataset.idx;
  if (boardCell[cellIdx] !== "" || gameOver) {
    return;
  }
  boardCell[cellIdx] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add("token");

  if (winner()) {
    currentUser.textContent = ` ${currentPlayer} 플레이어 승리 !`;
    gameOver = true;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  currentUser.textContent = `현재 플레이어 : ${currentPlayer}`;
}

// 승리조건
function winner() {
  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of winnerPattern) {
    const [a, b, c] = pattern;
    if (
      boardCell[a] &&
      boardCell[a] === boardCell[b] &&
      boardCell[a] === boardCell[c]
    ) {
      return true;
    }
  }
  if (!boardCell.includes("")) {
    currentPlayer.textContent = "무승부 !";
    gameOver = true;
  }
  if (gameOver) {
    const btn = resetBtn.createElement("button");
    btn.classList.add("reset");
    btn.textContent = "다시하기";
    resetBtn.appendChild(btn);
  }
}

resetBoard();
