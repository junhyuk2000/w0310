const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
let i = 1;

slide.style.transition = "none";
slide.style.transform = `translateX(-${i * 100}vw)`;

// 슬라이드 움직임
const slideMove = () => {
  ellipseChange(i);
  slide.style.transition = ".3s";
  slide.style.transform = `translateX(-${i * 100}vw)`;
  if (i === inner.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 1;
      slide.style.transform = `translateX(-${i * 100}vw)`;
    }, 300);
  }
};
//여기수정
const ellipseChange = (idx) => {
  if (idx === inner.length - 2) {
    ellipse.forEach((elm) => {
      elm.classList.remove("choice");
    });
    idx = 0;
    ellipse[idx].classList.add("choice");
    return;
  }
  if (reverse) {
    i--;
    ellipse[idx - 1].classList.remove("choice");
    ellipse[idx - 2].classList.add("choice");
    if (idx < 0) {
      idx = 2;
      ellipse[0].classList.remove("choice");
      ellipse[idx].classList.add("choice");
      return;
    }
    return;
  }
  ellipse[idx - 1].classList.remove("choice");
  ellipse[idx].classList.add("choice");
  i++;
};

//  슬라이드 작동 / 정지
let slideInterval = setInterval(slideMove, 3000);

const stopSlide = () => {
  clearInterval(slideInterval);
};
const moveSlide = () => {
  slideInterval = setInterval(slideMove, 3000);
};

[slide, rightBtn, leftBtn, ...ellipse].forEach((elm) => {
  elm.addEventListener("mouseover", stopSlide);
  elm.addEventListener("mouseout", moveSlide);
});

let slideDelay = false;
let reverse = false;
// 1. reverse = false만들고
// 2. idx가 inner.length-2일때 reverse = true
// 3. if(reverse) 해서 역순으로 바꾸기
// reverse = true;
// ellipse();
// reverse = false

//여기도 좌우수정
const righMove = () => {
  slide.style.transition = ".3s";
  if (slideDelay) return;
  slideDelay = true;
  i++;
  ellipseChange(i);
  slide.style.transform = `translateX(-${i * 100}vw)`;
  if (i === inner.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 1;
      slide.style.transform = `translateX(-${i * 100}vw)`;
      slideDelay = false;
    }, 300);
  } else {
    setTimeout(() => {
      slideDelay = false;
    }, 500);
  }
};

const leftMove = () => {
  if (slideDelay) return;
  if (i === 0) {
    slideDelay = true;
    reverse = true;
    ellipseChange();
    reverse = false;
  }
};

const btnMovement = () => {
  rightBtn.addEventListener("click", () => {
    righMove();
  });
  leftBtn.addEventListener("click", () => {
    leftBtn();
  });
};

// 버튼 슬라이드 이동
// let isSlideMove = false;

// rightBtn.addEventListener("click", () => {
//   if (isSlideMove) return;
//   isSlideMove = true;
//   i++;
//   slide.style.transition = ".3s";
//   slide.style.transform = `translateX(-${i * 100}vw)`;

//   ellipse[indicatorIdx].classList.remove("choice");
//   indicatorIdx++;
//   if (indicatorIdx === ellipse.length) indicatorIdx = 0;
//   ellipse[indicatorIdx].classList.add("choice");

//   if (i === inner.length - 1) {
//     setTimeout(() => {
//       slide.style.transition = "none";
//       i = 1;
//       slide.style.transform = `translateX(-${i * 100}vw)`;
//       isSlideMove = false;
//     }, 300);
//   } else {
//     setTimeout(() => {
//       isSlideMove = false;
//     }, 300);
//   }
// });

// leftBtn.addEventListener("click", () => {
//   if (isSlideMove) return;
//   isSlideMove = true;
//   i--;
//   slide.style.transition = ".3s";
//   slide.style.transform = `translateX(-${i * 100}vw)`;

//   ellipse[indicatorIdx].classList.remove("choice");
//   indicatorIdx--;
//   if (indicatorIdx < 0) indicatorIdx = ellipse.length - 1;
//   ellipse[indicatorIdx].classList.add("choice");

//   if (i === 0) {
//     setTimeout(() => {
//       slide.style.transition = "none";
//       i = inner.length - 2;
//       slide.style.transform = `translateX(-${i * 100}vw)`;
//       isSlideMove = false;
//     }, 300);
//   } else {
//     setTimeout(() => {
//       isSlideMove = false;
//     }, 300);
//   }
// });

// const slideClickMove = () => {
//   slide.style.transition = ".3s";
//   ellipse.forEach((elm, idx) => {
//     elm.addEventListener("click", () => {
//       ellipse.forEach((e) => {
//         e.classList.remove("choice");
//       });
//       slide.style.transform = `translateX(-${(idx + 1) * 100}vw)`;
//       indicatorIdx = idx;
//       elm.classList.add("choice");
//     });
//   });
// };

// slideClickMove();
