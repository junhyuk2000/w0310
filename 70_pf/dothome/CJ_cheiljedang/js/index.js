const inner = document.querySelectorAll(".inner");
let idx = 0;

setInterval(() => {
    inner[idx].classList.remove("show");
    idx = (idx + 1) % inner.length;
    inner[idx].classList.add("show");
}, 3000);