const cardArr = [
  { src: "/images/favorite/fire.jpg", alt: "불" },
  { src: "/images/favorite/fire2.jpg", alt: "불2" },
  { src: "/images/favorite/meditation.jpg", alt: "명상" },
  { src: "/images/favorite/meditation2.jpg", alt: "명상2" },
  { src: "/images/favorite/rain.jpg", alt: "비" },
  { src: "/images/favorite/rain2.jpg", alt: "비2" },
  { src: "/images/favorite/wind.jpg", alt: "바람" },
];

function arrayRandom(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const cardArea = document.querySelector(".card_area");
const randomCard = arrayRandom(cardArr).slice(0, 3);

cardArea.innerHTML = randomCard
  .map((img, idx) => {
    return `
  <div class="card" data-index="${idx}">
    <img src=${img.src} alt=${img.alt} class="card_img">
  </div>
  `;
  })
  .join("");

const luck = [
  "작은 선택이 큰 변화를 만드는 날입니다. 직감이 가는 쪽으로 움직여 보세요.",
  "뜻밖의 만남이나 소식이 찾아옵니다. 열린 마음으로 받아들이면 좋은 기회가 됩니다.",
  "오늘은 몸과 마음이 모두 가벼운 하루입니다. 그 여유를 주변에 나누어 주세요.",
  "집중력이 극대화되는 시기입니다. 미뤄둔 일을 마무리하기에 최적의 하루입니다.",
  "낯선 도전이 행운을 불러옵니다. 한 발 더 나아가면 새로운 길이 열립니다.",
  "오늘의 기운은 잔잔하게 내리는 비처럼 차분하고 안정적입니다. 작은 일에도 감사하며, 빗소리와 함께 느릿하게 걸어가 보세요.",
  "장작이 타오르는 소리처럼, 오늘 당신의 마음속 열정도 서서히 피어오릅니다. 천천히 그러나 확실하게 앞으로 나아가세요.",
  "깊은 밤은 생각을 정리하는 선물 같은 시간입니다. 오늘은 천천히, 그리고 조용히 마음을 정리해 보세요.",
];
const modal = document.querySelector(".modal");
const modalContents = document.querySelector(".modal_contents");
const modalImg = document.querySelector(".modal_img");
const card = document.querySelectorAll(".card");
const flip = document.querySelector(".flip");
const flipText = document.querySelector(".flip_back");
card.forEach((cardElm) => {
  cardElm.addEventListener("click", () => {
    const idx = cardElm.dataset.index;

    modalImg.src = randomCard[idx].src;
    modalImg.alt = randomCard[idx].alt;

    flipText.textContent = luck[idx];

    modal.classList.remove("hide");
    modalContents.classList.remove("hide");
  });
});

const modalClose = document.querySelector(".modal_close");
modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  modalContents.classList.add("hide");
});

flip.addEventListener("click", () => {
  flip.classList.toggle("flipped");
});
