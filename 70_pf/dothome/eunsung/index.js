const slide = document.querySelector('.slidelist');
const inner = document.querySelectorAll('.inner');

let idx = 0

setInterval(() => {
    idx++;
    slide.style.transition = "transform .3s ease";
    slide.style.transform = `translateX(-${idx * 1320}px)`;
    if (idx === inner.length-1) {
        setTimeout(()=>{
            slide.style.transition = "none";
            idx = 0;
            slide.style.transform = `translateX(-${idx * 1320}px)`;
        },400);
    }
}, 3000);