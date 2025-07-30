const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
let i = 0;
let slideDelay = false;

slide.style.transition = "none";
slide.style.transform = `translateX(-${(i+1) * 100}vw)`;

// 슬라이드 움직임
const slideMove = () => {
  i++;
  ellipseChange();

  slide.style.transition = ".3s";
  slide.style.transform = `translateX(-${(i+1) * 100}vw)`;

  if (i === ellipse.length) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 0;
      slide.style.transform = `translateX(-${(i+1) * 100}vw)`;
    }, 300);
    return;
  }
};

// 인디케이터 작동
const ellipseChange = () => {
  if(i < ellipse.length){
  ellipse.forEach(elm => elm.classList.remove('choice'))
  ellipse[i].classList.add("choice");
  } else {
    ellipse[ellipse.length-1].classList.remove('choice');
    ellipse[0].classList.add('choice');
  }
  if(i === -1){
    ellipse[i].classList.add('choice');
  }
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



rightBtn.addEventListener('click',()=>{
  rightMove();
})

leftBtn.addEventListener('click',()=>{
  leftMove();
});

const rightMove = () =>{
  if(slideDelay) return;
  slideDelay = true;
  slide.style.transition = '.3s';
  i++;
  slide.style.transform = `translateX(-${(i+1) * 100}vw)`;
  ellipseChange();
  
  if (i === ellipse.length) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 0;
      slide.style.transform = `translateX(-${(i+1) * 100}vw)`;
      slideDelay = false;
    }, 400);
    return;
  }
  slideDelay = false;
}


const leftMove = () =>{
  if(slideDelay) return;
  slideDelay = true;

  i--;
  if(i<0) {
    ellipse.forEach(elm => elm.classList.remove('choice'));
    ellipse[ellipse.length -1].classList.add('choice');
  slide.style.transition = '.3s';
  slide.style.transform = 'translateX(0vw)';
  
  setTimeout(() => {
    slide.style.transition = 'none';
    i = ellipse.length-1;
    slide.style.transform = `translateX(-${(i+1)* 100}vw)`;
    slideDelay = false;
    }, 300);
  return;
  }

  slide.style.transition = '.3s';
    slide.style.transform = `translateX(-${(i+1)* 100}vw)`;
  ellipseChange();
  slideDelay = false;
}