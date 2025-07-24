// section1
const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
let indicatorIdx = 0;
let i = 1;

slide.style.transition = "none";
slide.style.transform = `translateX(-${i * 100}vw)`;
slide.style.transition = ".3s";
// 슬라이드 동작
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

// 호버 시 setInterval 정지 및 동작 이벤트
let slideInterval = setInterval(slideMove, 3000);

const stopSlide = () => {
  clearInterval(slideInterval);
  clearInterval(indicatorInterval);
};
const moveSlide = () => {
  stopSlide();
  slideInterval = setInterval(slideMove, 3000);
  indicatorInterval = setInterval(indicator, 3000);
};

[slide, rightBtn, leftBtn].forEach((elm) => {
  elm.addEventListener("mouseover", stopSlide);
  elm.addEventListener("mouseout", moveSlide);
});

// 인디케이터 동작
const indicator = () => {
  ellipse[indicatorIdx].classList.remove("choice");
  indicatorIdx++;

  if (indicatorIdx === ellipse.length) {
    indicatorIdx = 0;
    ellipse[indicatorIdx].classList.add("choice");
  }

  ellipse[indicatorIdx].classList.add("choice");
};
let indicatorInterval = setInterval(indicator, 3000);

// 버튼 슬라이드 이동
let isSlideMove = false;

rightBtn.addEventListener("click", () => {
  if (isSlideMove) return;
  isSlideMove = true;
  i++;
  slide.style.transition = ".3s";
  slide.style.transform = `translateX(-${i * 100}vw)`;

  ellipse[indicatorIdx].classList.remove("choice");
  indicatorIdx++;
  if (indicatorIdx === ellipse.length) indicatorIdx = 0;
  ellipse[indicatorIdx].classList.add("choice");

  if (i === inner.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 1;
      slide.style.transform = `translateX(-${i * 100}vw)`;
      isSlideMove = false;
    }, 300);
  } else {
    setTimeout(() => {
      isSlideMove = false;
    }, 300);
  }
});

leftBtn.addEventListener("click", () => {
  if (isSlideMove) return;
  isSlideMove = true;
  i--;
  slide.style.transition = ".3s";
  slide.style.transform = `translateX(-${i * 100}vw)`;

  ellipse[indicatorIdx].classList.remove("choice");
  indicatorIdx--;
  if (indicatorIdx < 0) indicatorIdx = ellipse.length - 1;
  ellipse[indicatorIdx].classList.add("choice");

  if (i === 0) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = inner.length - 2;
      slide.style.transform = `translateX(-${i * 100}vw)`;
      isSlideMove = false;
    }, 300);
  } else {
    setTimeout(() => {
      isSlideMove = false;
    }, 300);
  }
});
// 인디케이터 클릭 시 이동
const slideClickMove = () => {
  ellipse.forEach((elm, idx) => {
    elm.addEventListener("click", () => {
      ellipse.forEach((e) => {
        e.classList.remove("choice");
      });
      slide.style.transform = `translateX(-${(idx + 1) * 100}vw)`;
      indicatorIdx = idx;
      elm.classList.add("choice");
    });
  });
};

slideClickMove();

// section3
const tabBtn = document.querySelectorAll(".tab>ul>li");
const tabCard = document.querySelectorAll(".tabs");

tabBtn.forEach((elm, index) => {
  elm.addEventListener("click", () => {
    tabBtn.forEach((btn) => {
      btn.classList.remove("choice_tab");
    });
    tabCard.forEach((card) => {
      card.classList.remove("tabs_show");
    });
    elm.classList.add("choice_tab");
    tabCard[index].classList.add("tabs_show");
  });
});
