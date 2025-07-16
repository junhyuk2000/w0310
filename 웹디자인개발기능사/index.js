const inner = document.querySelectorAll(".inner");

let i = 0;

setInterval(() => {
    inner[i].classList.remove("show");
    i = (i + 1) % inner.length;
    inner[i].classList.add("show");
}, 3000);