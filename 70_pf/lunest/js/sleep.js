const likeBtn = document.querySelectorAll(".heart");
const modalText = document.querySelector(".modal-content>p");

likeBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (elm.textContent === "♡") {
      modalText.textContent = "즐겨찾기에 추가되었습니다.";
    } else {
      modalText.textContent = "즐겨찾기에서 삭제되었습니다.";
    }
    elm.textContent = elm.textContent === "♡" ? "❤" : "♡";
    showAlert();
  });
});

function showAlert() {
  document.getElementById("alertModal").style.display = "flex";
}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}

const soundCard = document.querySelectorAll(".sound-card");
const audioUi = document.querySelector(".audio_ui");

soundCard.forEach((card) => {
  card.addEventListener("click", () => {
    createAudioUi(card.dataset.title);

  const progress = document.getElementById("progress_bar");
  const current = document.getElementById("current_time");
  const total = document.getElementById("total_time");
  const playBtn = document.getElementById("play_btn");
  const volume = document.getElementById("volume");
   
  volume.addEventListener("input", (e) => {
      AudioPlayer.setVolume(Number(e.target.value));
  });

  AudioPlayer.initPlayer(progress, current, total, playBtn);
  AudioPlayer.setVolume(Number(volume.value));
  AudioPlayer.playTrack(card.dataset.title);
  });
});

const deleteUi = () => {
  audioUi.innerHTML = "";
};


const createAudioUi = (title) => {
  audioUi.innerHTML = `
    <div class="player">
      <img src="/images/sleep/sleep_${title}.png" alt="${title}" class="cover-img">
      <div class="info">
        <h3 id="track_title">${title}</h3>
        <div class="progress">
          <span id="current_time">0:00</span>
          <input type="range" id="progress_bar" min="0" max="100" value="0">
          <span id="total_time">0:00</span>
        </div>
        <div class="controls">
          <button id="play_btn">▶</button>
          <input type="range" min="0" max="1" step="0.01" value="0.5" id="volume">
        </div>
        <button id="close" onclick="deleteUi()"> X </button>
      </div>
    </div>
  </div>
  `;
};




