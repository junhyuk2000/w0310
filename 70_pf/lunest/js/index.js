const mobileMenu = document.querySelector(".mobile_menu");
const closeBtn = document.querySelector(".close");
const gnb = document.querySelector(".gnb");
const header = document.querySelector('header');

// 메뉴 열기
mobileMenu.addEventListener('click', () => {
  gnb.classList.add("open");
  header.classList.add("menu_open");
  mobileMenu.style.display = "none";
  closeBtn.style.display = "block";
  document.body.classList.add("menu_open");
});

// 메뉴 닫기
closeBtn.addEventListener('click', () => {
  gnb.classList.remove("open");
  header.classList.remove("menu_open");
  closeBtn.style.display = "none";
  mobileMenu.style.display = "block";
  document.body.classList.remove("menu_open");

  // 서브메뉴 닫기
  document.querySelectorAll(".sub.open").forEach(sub => sub.classList.remove("open"));
});

// 리사이즈 시 상태 초기화
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    gnb.classList.remove("open");
    header.classList.remove("menu_open");
    gnb.style.display = "";
    header.style.height = "";
    mobileMenu.style.display = "none";
    closeBtn.style.display = "none";
    document.body.classList.remove("menu_open");
  } else {
    mobileMenu.style.display = "block";
    closeBtn.style.display = "none";
  }
});




// section3
document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const overlay = document.getElementById("overlay");
  const overlayTimer = document.getElementById("overlay-timer");

  let timerInterval;
  let time = 5 * 60;

  startBtn.addEventListener("click", function () {
    time = 5 * 60;
    overlay.style.display = "flex";
    updateOverlayDisplay();

    timerInterval = setInterval(() => {
      time--;
      updateOverlayDisplay();

      if (time <= 0) {
        clearInterval(timerInterval);
        overlayTimer.innerText = "명상이 완료되었습니다 🧘";
      }
    }, 1000);
  });

  overlay.addEventListener("click", function () {
    clearInterval(timerInterval);
    overlay.style.display = "none";
  });

  function updateOverlayDisplay() {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    overlayTimer.innerText = `${minutes}:${seconds}`;
  }
});


// section4
// 질문 로직
const questions = document.querySelectorAll('.question');
const selectBoxes = document.querySelectorAll('.select_box');
const waitTime = document.querySelector('.wait_time');
const recommendBox = document.querySelector('.recommend');

let step = 0;
let selectedAction = '';

function nextStep() {
  if (step < questions.length - 1) {
    questions[step].classList.remove('show');
    selectBoxes[step].classList.remove('show');
    step++;
    setTimeout(() => {
      questions[step].classList.add('show');
      selectBoxes[step].classList.add('show');
      
    }, 300);
  } else {
    showRecommendation();
  }
}

document.querySelectorAll('.select_card').forEach(card => {
  card.addEventListener('click', () => {
    const text = card.querySelector('p').innerText;
    if (step === 2) selectedAction = text;
    nextStep();
  });
});

function showRecommendation() {
  questions.forEach(q => q.classList.remove('show'));
  selectBoxes.forEach(box => box.classList.remove('show'));

  waitTime.classList.add('show');

  setTimeout(() => {
    waitTime.classList.remove('show');
    recommendBox.classList.add('show');

    let track = 'rain';
    if (selectedAction.includes('음악')) track = 'bird';
    else if (selectedAction.includes('휴식')) track = 'fire';
    else if (selectedAction.includes('잠')) track = 'rain';

    renderPlayer(track);
  }, 1500);
}

// 플레이어 렌더링
function renderPlayer(track) {
  recommendBox.innerHTML = `
    <div class="player">
      <img src="images/index/section4/${track}.jpg" alt="${track}" class="thumb">
      <div class="info">
        <h3>${track}</h3>
        <div class="progress">
          <span id="current_time">0:00</span>
          <input type="range" id="progress_bar" min="0" max="100" value="0">
          <span id="total_time">0:00</span>
        </div>
        <div class="controls">
          <button id="play_btn">▶</button>
          <input type="range" min="0" max="1" step="0.01" value="0.5" id="volume">
        </div>
      </div>
    </div>
  `;

  // DOM 연결
  const progress = document.getElementById('progress_bar');
  const current = document.getElementById('current_time');
  const total = document.getElementById('total_time');
  const playBtn = document.getElementById('play_btn');
  const volume = document.getElementById('volume');

  // 플레이어 초기화
  AudioPlayer.initPlayer(progress, current, total, playBtn);

  // 곡 재생
  AudioPlayer.playTrack(track);

  // 볼륨 변경
  volume.addEventListener('input', (e) => {
    AudioPlayer.setVolume(e.target.value);
  });
}

