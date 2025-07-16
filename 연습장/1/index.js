const inner = document.querySelectorAll(".inner");

let idx = 0;

setInterval(() => {
    inner[idx].classList.remove("active");
    idx = (idx+1) % inner.length;
    inner[idx].classList.add("active");
}, 3000);
