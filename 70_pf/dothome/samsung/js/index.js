const slide = document.querySelector('.slidelist');
const inner = document.querySelectorAll('.inner');

let i = 0;

setInterval(() => {
    i++;
    slide.style.transition = "transform .3s ease";
    slide.style.transform = `translateX(-${i * 25}%)`;
    if(i === inner.length-1) {
        setTimeout(() => {
            slide.style.transition = 'none';
            i = 0;
            slide.style.transform = `translateX(-${i * 25}%)`;
        }, 300);
    }
}, 2699);