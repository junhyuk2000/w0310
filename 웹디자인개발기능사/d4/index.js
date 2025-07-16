const slide = document.querySelector('.slidelist');
const inner = document.querySelectorAll('.inner');

idx = 0;

setInterval(() => {
    idx++;
    slide.style.transition = 'transform .3s ease';
    slide.style.transform = `translateX(-${idx * 1720}px)`;
    setTimeout(() => {
        if (idx === inner.length - 1) {
            slide.style.transition = 'none'
            idx = 0;
            slide.style.transform = `translateX(-${idx * 1720}px)`;
        }
    }, 310);
}, 3000);