const slide = document.querySelector('.slide_list');
const inner = document.querySelectorAll('.inner');
idx = 0;

setInterval(()=>{
    idx++
    slide.style.transition = "transform 0.3s ease";
    slide.style.transform = `translateX(-${idx*1200}px)`;
    if (idx === inner.length-1) {
        setTimeout(() => {
            slide.style.transition = 'none';
            idx=0;
            slide.style.transform = `translateX(-${idx*1200}px)`;
        }, 500);
    }
},3000)