const tab1 = document.getElementById("tabs-1");
const tab2 = document.getElementById("tabs-2");
const tab3 = document.getElementById("tabs-3");
const tab4 = document.getElementById("tabs-4");
const tabs = [tab1, tab2, tab3, tab4];

const tabA = document.querySelectorAll(".tab_menu>a");
const tabMenu = document.querySelectorAll(".tab_menu");

tabMenu.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.remove("hide");
      } else {
        tab.classList.add("hide");
      }
    });
    tabA.forEach((a, i) => {
      a.style.color = i === index ? "yellow" : "#333";
    });
  });
});
