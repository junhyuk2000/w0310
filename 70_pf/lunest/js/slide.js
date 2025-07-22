const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
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

//  setInterval 정지 및 동작
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
});

[slide, rightBtn, leftBtn].forEach((elm) => {
  elm.addEventListener("mouseout", moveSlide);
});

// 인디케이터
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
  if (indicatorIdx < 0) indicatorIdx = ellipse.length-1;
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



// const slideClickMove = () =>{
//   slide.style.transition = ".3s"
//   ellipse.forEach((elm,idx)=>{
//     elm.addEventListener('click',()=>{
//       elm.classList.remove("choice");
//       if(idx === 0){
//         slide.style.transform = `translateX(-${(idx+1)*100}vw)`;
//         indicatorIdx = idx;
//         ellipse[idx].classList.add("choice");
//       }
//       if(idx === 1){
//         slide.style.transform = `translateX(-${(idx+1)*100}vw)`;
//         indicatorIdx = idx;
//         ellipse[idx].classList.add("choice");
//       }
//       if(idx === 2){
//         slide.style.transform = `translateX(-${(idx+1)*100}vw)`;
//         indicatorIdx = idx;
//         ellipse[idx].classList.add("choice");
//       }
//     })
//   });
// }

// slideClickMove();