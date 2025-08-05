const btn = document.querySelector(".modal_btn");
function toggleHeart(button) {
  button.classList.toggle("active");
  button.textContent = button.textContent === "♡" ? "❤" : "♡";
  showAlert();
}

function showAlert() {
  document.getElementById("alertModal").style.display = "flex";
}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}

function toggleAccordion(id) {
  const all = document.querySelectorAll(".accordion-content");
  all.forEach((el) => {
    if (el.id === id) {
      el.classList.toggle("open");
    } else {
      el.classList.remove("open"); // 나머지는 닫힘
    }
  });
}
