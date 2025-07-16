const inner = document.querySelectorAll('.inner');
idx= 0;

setInterval(() => {
    inner[idx].classList.remove("active");
    idx = (idx + 1) % inner.length;
    inner[idx].classList.add("active");
}, 3000);




// const slide = document.querySelector('.slidelist');
// const inner = document.querySelectorAll('.inner');

// idx=0;

// setInterval(() => {
//     idx++;
//     slide.style.transition = 'transform 0.3s ease';
//     slide.style.transform = `translateX(-${idx*1920}px)`;
//     if (idx === inner.length-1) {
//         setTimeout(() => {
//             slide.style.transition = "none";
//             idx= 0;
//             slide.style.transform = `translateX(-${idx*1920}px)`;
//         }, 500);
//     }
// }, 3000);