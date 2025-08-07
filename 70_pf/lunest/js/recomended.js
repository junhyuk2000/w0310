const playtBtn = document.getElementById("playPauseBtn");
const audio = new Audio("../mp3/rain.mp3");

playtBtn.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        playtBtn.textContent = "⏸";
    } else {
        audio.pause();
        playtBtn.textContent = "▶";
    }
})

//////////
const clock = document.getElementById("clock");
const greeting = document.querySelector('.greeting');

const date = new Date();
const hours = date.getHours();
const minute = date.getMinutes();


clock.textContent = `${hours} : ${minute}`;

if(hours < 7) {
    greeting.textContent = "좋은 밤 보내세요 🌙";
} else if ( hours < 18) {
    greeting.textContent = "오늘도 좋은 하루 되세요 ☀️";
} else  {
    greeting.textContent = "편안한 저녁 보내세요 ⭐";
}