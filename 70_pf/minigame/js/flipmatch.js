const board = document.querySelector(".game_board");
const movesEl = document.getElementById("moves");
const matchesEl = document.getElementById("matches");

const icons = [
  "images/card1.jpg",
  "images/card2.jpg",
  "images/card3.jpg",
  "images/card4.jpg",
  "images/card5.jpg",
  "images/card6.jpg",
  "images/card7.jpg",
  "images/card8.jpg",
  "images/card9.jpg",
];

let cards = [...icons, ...icons];
let firstCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;

// 카드 섞기
cards.sort(() => 0.5 - Math.random());

// 카드 생성
cards.forEach((icon) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card_inner">
      <div class="card_front"><img src="${icon}" alt="card"></div>
      <div class="card_back"></div>
    </div>
  `;
  board.appendChild(card);
});

// 시작 애니메이션
function showCardsSequence() {
  const allCards = document.querySelectorAll(".card");
  lockBoard = true;

  //순차로 카드 360도 회전
  allCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("spin");
      setTimeout(() => card.classList.remove("spin"), 600);
    }, index * 100);
  });

  //끝난 후 전체 앞면 노출
  setTimeout(() => {
    allCards.forEach((card) => card.classList.add("flipped"));

    setTimeout(() => {
      allCards.forEach((card) => card.classList.remove("flipped"));
      lockBoard = false;
      initCardEvents();
    }, 1000);
  }, allCards.length * 100 + 600);
}

function initCardEvents() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (lockBoard || card.classList.contains("flipped")) return;

      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
      } else {
        moves++;
        movesEl.textContent = `시도: ${moves}`;

        const firstImg = firstCard.querySelector(".card_front img").src;
        const secondImg = card.querySelector(".card_front img").src;

        if (firstImg === secondImg) {
          matches++;
          matchesEl.textContent = `매칭: ${matches}`;
          firstCard = null;

          if (matches === icons.length) {
            setTimeout(() => {
              // confirm 창
              const restart = confirm(
                `게임 클리어! 시도 ${moves}회\n다시 시작하시겠습니까?`
              );
              if (restart) {
                resetGame();
              }
            }, 300);
          }
        } else {
          lockBoard = true;
          setTimeout(() => {
            firstCard.classList.remove("flipped");
            card.classList.remove("flipped");
            firstCard = null;
            lockBoard = false;
          }, 1000);
        }
      }
    });
  });
}

function resetGame() {
  board.innerHTML = "";
  firstCard = null;
  lockBoard = false;
  moves = 0;
  matches = 0;
  movesEl.textContent = "시도: 0";
  matchesEl.textContent = "매칭: 0";

  cards.sort(() => 0.5 - Math.random());

  cards.forEach((icon) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card_inner">
        <div class="card_front"><img src="${icon}" alt="card"></div>
        <div class="card_back"></div>
      </div>
    `;
    board.appendChild(card);
  });

  showCardsSequence();
}

showCardsSequence();
