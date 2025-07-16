const main = document.querySelector('.main');
const subs = document.querySelectorAll('.sub');
const login = document.querySelector('.login');
const signUp = document.querySelector('.sign_up');
const userUi = document.querySelector('.user_ui');
const userNameShow = document.querySelector('.username_show');

const loginUser = localStorage.getItem('loginUser');

// 로컬스토리지 값 저장되면 헤더 상단메뉴 변경
if (loginUser) {
  login.style.display = 'none';
  signUp.style.display = 'none';

  userUi.style.display = 'flex';
  userNameShow.textContent = loginUser;
}
// 마이페이지 이동
userUi.addEventListener('click', () => {
  window.location.href = '/70_pf/steam/sub/mypage.html';
});

// 내비게이션 서브메뉴 스타일 변경
main.addEventListener('mouseover', () => {
  subs.forEach((sub) => {
    sub.style.height = '200px';
    sub.style.opacity = '1';
    sub.style.visibility = 'visible';
  });
});

main.addEventListener('mouseout', () => {
  subs.forEach((sub) => {
    sub.style.height = '0';
    sub.style.opacity = '0';
    sub.style.visibility = 'hidden';
  });
});

// 슬라이드 (Section1)

const slides = document.getElementById('slides');
const rects = document.querySelectorAll('.rect');
const total = rects.length;
const slideHeight = 895;
let idx = 0;

function goToSlide(index) {
  slides.style.transition = 'transform 0.8s ease-in-out';
  slides.style.transform = `translateY(-${slideHeight * index}px)`;

  rects.forEach((rect, i) =>
    rect.classList.toggle('choice', i === index % total)
  );
}

function nextSlide() {
  idx++;
  goToSlide(idx);

  // 슬라이드가 복제본(마지막) 도달 시 → 진짜 첫 번째로 리셋
  if (idx === total) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateY(0px)`;
      idx = 0;
      rects.forEach((r, i) => r.classList.toggle('choice', i === 0));
    }, 850); // transition 시간보다 살짝 크게
  }
}

// 자동 루프
setInterval(nextSlide, 3000);
