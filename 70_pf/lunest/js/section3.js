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
