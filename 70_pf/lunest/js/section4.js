const selectBox = document.querySelectorAll(".select_box");
const selectCard = document.querySelectorAll(".select_card");
const question = document.querySelectorAll(".question");
const waitTime = document.querySelector(".wait_time");
const recommend = document.querySelector(".recommend");
let step = 0;

const cardClickEvent = () => {
  selectBox[step].classList.remove("show");
  question[step].classList.remove("show");
  step += 1;
  if (step === selectBox.length) {
    waitTime.classList.add("show");
    setTimeout(() => {
      waitTime.classList.remove("show");
      recommend.classList.add("show");
    }, 3000);
    return;
  }
  selectBox[step].classList.add("show");
  question[step].classList.add("show");
};

selectCard.forEach((elm) => {
  elm.addEventListener("click", () => {
    cardClickEvent();
  });
});
