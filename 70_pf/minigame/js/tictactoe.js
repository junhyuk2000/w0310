const currentUser = document.querySelector(".current_user");
const gameBoard = document.querySelector(".game_board");
const resetBtn = document.querySelector(".reset_btn");

let boardCell = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

currentUser.textContent = `현재 플레이어 : ${currentPlayer}`;

// 게임 리셋 함수
function resetBoard() {
  gameBoard.innerHTML = "";
  resetBtn.innerHTML = ""; 
  currentUser.style.fontSize = "1.5rem";
  boardCell = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  currentUser.textContent = `현재 플레이어 : ${currentPlayer}`;

  for (let i = 0; i < boardCell.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.idx = i;
    gameBoard.appendChild(cell);
    cell.addEventListener("click", handleClick);
  }
}

// 셀 클릭 이벤트 및 승리 판별
function handleClick(e) {
  const cellIdx = Number(e.target.dataset.idx);
  if (boardCell[cellIdx] !== "" || gameOver) return;

  boardCell[cellIdx] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add("token");

  // 승리
  if (winner()) {
    currentUser.textContent = ` ${currentPlayer} 플레이어 승리 !`;
    gameOver = true;

    const btn = document.createElement("button");
    btn.classList.add("reset");
    btn.textContent = "다시하기";
    btn.addEventListener('click', () => {
      resetBoard();
      resetBtn.innerHTML = "";
    });
    resetBtn.appendChild(btn);
    return;
  }

  // 무승부
  if (!boardCell.includes("")) {
    currentUser.textContent = "무승부 !";
    currentUser.style.fontSize = "2rem";
    gameOver = true;
    
    const btn = document.createElement("button");
    btn.classList.add("reset");
    btn.textContent = "다시하기";
    btn.addEventListener('click', () => {
      resetBoard();
      resetBtn.innerHTML = "";
    });
    resetBtn.appendChild(btn);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  currentUser.textContent = `현재 플레이어 : ${currentPlayer}`;
}

//승리 조건 
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
      document.querySelectorAll(".cell").forEach(elm => {
        elm.style.background = "#3a427a"
        elm.style.color = "#fff";
      });
      currentUser.style.fontSize = "2rem";
      return true;
    }
  }
  return false;
}

resetBoard();
