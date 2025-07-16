const ellipse = document.querySelectorAll(".ellipse");
const slide = document.querySelector(".slidelist");
const inner = document.querySelectorAll(".inner");
const left = document.querySelector(".slide_left");
const right = document.querySelector(".slide_right");

let i = 1;
let idx = 0;
slide.style.transition = "none";
slide.style.transform = `translateX(-${i * 25}%)`;

// 케로셀 동그라미 
const reload = () => {
    ellipse[idx].classList.remove("choice");
    idx = (idx + 1) % (inner.length - 2);
    ellipse[idx].classList.add("choice");
};

// 케로셀 동그라미 역순
const reverse = () => {
    ellipse[idx].classList.remove("choice");
    idx--;
    if (idx === -1) {
        idx = 2;
        ellipse[idx].classList.add("choice");
    };
    ellipse[idx].classList.add("choice");
};

// 자동 슬라이드
setInterval(() => {
    i++;
    slide.style.transition = "transform .3s ease";
    slide.style.transform = `translateX(-${i * 25}%)`;
    reload();
    if (i === inner.length - 1) {
        setTimeout(() => {
                slide.style.transition = "none";
                i = 1;
                slide.style.transform = `translateX(-${i * 25}%)`;
            },300);
        };
}, 3000);

// 다음버튼
right.addEventListener("click", () => {
    i++;
    reload();
    slide.style.transition = "transform .3s ease";
    slide.style.transform = `translateX(-${i * 25}%)`;
    if (i === inner.length - 1) {
        setTimeout(() => {
            slide.style.transition = "none";
            i = 1;
            slide.style.transform = `translateX(-${i * 25}%)`;
        }, 300);
    }
});

// 이전버튼
left.addEventListener("click", () => {
    slide.style.transition = "transform .3s ease";
    i--;
    reverse();
    slide.style.transform = `translateX(-${i * 25}%)`;
    if (i === -1) {
        setTimeout(() => {
            slide.style.transition = "none";
            i = inner.length - 2;
            slide.style.transform = `translateX(-${i * 25}%)`;
        }, 10)
        setTimeout(() => {
            slide.style.transition = "transform .2s ease";
            i--;
            slide.style.transform = `translateX(-${i * 25}%)`;
        }, 200);
    }
});