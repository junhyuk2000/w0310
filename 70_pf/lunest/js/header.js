const mobileMenu = document.querySelector(".mobile_menu");
const closeBtn = document.querySelector(".close");
const gnb = document.querySelector(".gnb");
const header = document.querySelector(".header");
const mainLi = document.querySelectorAll(".main>li");
// 메뉴 열기
mobileMenu.addEventListener("click", () => {
  gnb.classList.add("open");
  header.classList.add("menu_open");
  mobileMenu.style.display = "none";
  closeBtn.style.display = "block";
  document.body.classList.add("menu_open");
});

// 메뉴 닫기
closeBtn.addEventListener("click", () => {
  gnb.classList.remove("open");
  header.classList.remove("menu_open");
  closeBtn.style.display = "none";
  mobileMenu.style.display = "block";
  document.body.classList.remove("menu_open");

  document
    .querySelectorAll(".sub.open")
    .forEach((sub) => sub.classList.remove("open"));
});

mainLi.forEach((li) => {
  li.addEventListener("click", () => {
    mainLi.forEach((item) => {
      item.classList.remove("open");
    });
    li.classList.add("open");
  });
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 768) {
//     gnb.classList.remove("open");
//     header.classList.remove("menu_open");
//     gnb.style.display = "";
//     header.style.height = "";
//     mobileMenu.style.display = "none";
//     closeBtn.style.display = "none";
//     document.body.classList.remove("menu_open");
//   } else {
//     mobileMenu.style.display = "block";
//     closeBtn.style.display = "none";
//   }
// });
