class AudioPlayer {
  constructor(url, elements) {
    this.audioCtx = new AudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.connect(this.audioCtx.destination);
    this.source = null;
    this.buffer = null;
    this.startTime = 0;
    this.pausedAt = 0;
    this.isPlaying = false;
    this.url = url;
    this.ui = elements;

    this.setupUI();
    this.load();
  }

  async load() {
    const res = await fetch(this.url);
    const buf = await res.arrayBuffer();
    this.buffer = await this.audioCtx.decodeAudioData(buf);
  }

  play(offset = 0) {
    if (!this.buffer) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    this.source = this.audioCtx.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.gainNode);
    this.startTime = this.audioCtx.currentTime - offset;
    this.source.start(0, offset);

    this.isPlaying = true;
    this.ui.playBtn.textContent = '⏸';

    this.source.onended = () => {
      this.isPlaying = false;
      this.pausedAt = 0;
      this.ui.playBtn.textContent = '▶️';
    };

    requestAnimationFrame(() => this.updateProgress());
  }

  pause() {
    if (this.source) {
      this.source.stop();
      this.pausedAt = this.audioCtx.currentTime - this.startTime;
      this.isPlaying = false;
      this.ui.playBtn.textContent = '▶️';
    }
  }

  toggle() {
    this.isPlaying ? this.pause() : this.play(this.pausedAt);
  }

  updateProgress() {
    if (!this.isPlaying) return;
    const elapsed = this.audioCtx.currentTime - this.startTime;
    const percent = (elapsed / this.buffer.duration) * 100;
    this.ui.progressBar.style.width = `${percent}%`;
    if (percent < 100) requestAnimationFrame(() => this.updateProgress());
  }

  setupUI() {
    this.ui.playBtn.addEventListener('click', () => this.toggle());
    this.ui.volume.addEventListener('input', (e) => {
      this.gainNode.gain.value = e.target.value;
    });
    this.ui.progressContainer.addEventListener('click', (e) => {
      if (!this.buffer) return;
      const rect = this.ui.progressContainer.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const time = this.buffer.duration * percent;
      if (this.source) this.source.stop();
      this.pausedAt = time;
      this.play(time);
    });
  }
}

// 🎶 플레이어 인스턴스 여러 개 생성
const player1 = new AudioPlayer('GlassChinchilla.mp3', {
  playBtn: document.querySelector('#btn1'),
  volume: document.querySelector('#vol1'),
  progressContainer: document.querySelector('#prog1'),
  progressBar: document.querySelector('#bar1')
});

const player2 = new AudioPlayer('Ocean.mp3', {
  playBtn: document.querySelector('#btn2'),
  volume: document.querySelector('#vol2'),
  progressContainer: document.querySelector('#prog2'),
  progressBar: document.querySelector('#bar2')
});
