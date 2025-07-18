const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
let indicatorIdx = 0;
let i = 1;
slide.style.transition = "none";
slide.style.transform = `translateX(-${i * 100}vw)`;

// 슬라이드 움직임
const slideMove = () => {
  i++;
  slide.style.transition = "transform .3s ease";
  slide.style.transform = `translateX(-${i * 100}vw)`;
  if (i === inner.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 1;
      slide.style.transform = `translateX(-${i * 100}vw)`;
    }, 300);
  }
};

let slideInterval = setInterval(slideMove, 3000);

slide.addEventListener("mouseover", () => {
  clearInterval(slideInterval);
  clearInterval(indicatorInterval);
});

slide.addEventListener("mouseout", () => {
  clearInterval(slideInterval);
  clearInterval(indicatorInterval);
  slideInterval = setInterval(slideMove, 3000);
  indicatorInterval = setInterval(indicator, 3000);
});

// 인디케이터
const indicator = () => {
  ellipse[indicatorIdx].classList.remove("choice");
  indicatorIdx++;
  ellipse[indicatorIdx].classList.add("choice");
  if (indicatorIdx === ellipse.length - 1) {
    setTimeout(() => {
      ellipse[indicatorIdx].classList.remove("choice");
      indicatorIdx = 0;
      ellipse[indicatorIdx].classList.add("choice");
    }, 3300);
  }
};

let indicatorInterval = setInterval(indicator, 3000);
