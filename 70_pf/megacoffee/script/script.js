$(document).ready(function () {
  // var 변수 선언 키워드
  // -> let(변경되는 값을 저장), const(변경되지 않는 값을 저장)
  let now = 0; // 0(#section1) -> 1(section2) -> 2(section3) -> 3(section4)
  const sections = $("#container div");
  // sections.length: 섹션의 수
  const total = sections.length + 1; // +1은 푸터 포함

  /* 
                함수 선언
                    function 함수명(매개변수1, 매개변수2, ...){ 실행코드; }
                함수 호출
                    함수명(인자1, 인자2, ...)
            */

  function scrollTo(index) {
    let pos = 0;
    if (index < sections.length) {
      // offset().top - 요소의 문서 기준 세로 위치
      // position().top - 요소의 부모 요소 기준 세로 위치
      pos = sections.eq(index).offset().top;
    } else {
      pos = $("#footer").offset().top;
    }
    // scrollTop: jQuery(CSS like) 속성이다.
    $("html, body").stop().animate({ scrollTop: pos }, 500);
  }

  $(window).on("wheel", function (e) {
    // is(): ~있다.
    // :animated - 애니메이션이 적용된 요소 -> jQuery 선택자
    // return -> 함수(이벤트) 종료
    // return 표현식; -> 표현식의 결과를 반환

    // html, body 안의 애니메이션되는 요소가 있으면 이벤트 종료
    // -> 스크롤 이벤트의 중복 실행 방지
    if ($("html, body").is(":animated")) return;

    // 마우스 휠 이벤트에서 스크롤 방향과 크기를 가져옴
    // e.originalEvent 객체
    // deltaY 속성
    // deltaY > 0 보다 크면 아래로 스크롤(휠 내림)
    // deltaY < 0 보다 크면 위로 스크롤(휠 올림)

    // 논리연산자: &&(and), ||(or), !(not)

    const delta = e.originalEvent.deltaY;
    if (delta > 0 && now < total - 1) {
      // now가 1씩 증가
      now++;
    } else if (delta < 0 && now > 0) {
      // now가 1씩 감소
      now--;
    }
    scrollTo(now);
  });

  // 스크롤 시 헤더 색상 변경
  $(window).on("scroll", function () {
    // scrollTop(): 세로 방향 스크롤 양
    const windowScrollTop = $(window).scrollTop();
    if (windowScrollTop > 50) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
});

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
// section2
document.addEventListener("DOMContentLoaded", () => {
  const scrollMotion = document.querySelectorAll("#sec2 .scroll_motion");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // 스크롤 위치
    scrollMotion.forEach((elm, idx) => {
      if (scrollTop > 500 + idx * 50) {
        elm.classList.add("show");
      } else {
        elm.classList.remove("show");
      }
    });
  });
});

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
