const inner = document.querySelectorAll('.inner');

let i = 0;

setInterval(() => {
    inner[i].classList.remove("active");
    i = (i + 1) % inner.length ;
    inner[i].classList.add("active");
}, 3000);