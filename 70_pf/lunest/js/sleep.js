const likeBtn = document.querySelectorAll(".heart");
const modalText = document.querySelector(".modal-content>p");

likeBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (elm.textContent === "♡") {
      modalText.textContent = "즐겨찾기에 추가되었습니다.";
    } else {
      modalText.textContent = "즐겨찾기에서 삭제되었습니다.";
    }
    elm.textContent = elm.textContent === "♡" ? "❤" : "♡";
    showAlert();
  });
});

function showAlert() {
  document.getElementById("alertModal").style.display = "flex";
}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}