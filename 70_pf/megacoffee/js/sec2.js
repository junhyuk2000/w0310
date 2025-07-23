import data from "data.js";

const tabMenu = document.querySelectorAll("#tabs>ul>li");
const tab = document.querySelectorAll("#tabs>div");
const tabA = document.querySelectorAll(".tab_menu>a");

tabMenu.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    tab.forEach((elm, idx) => {
      if (index === idx) {
        elm.classList.remove("hide");
      } else {
        elm.classList.add("hide");
      }
    });
    tabA.forEach((a, i) => {
      a.style.color = index === i ? "#00b7ff" : "#333";
    });
  });
});

// const tabs_1 = tab[0];

// function tabsChange(i0, i1, i2) {
//   tabs_1.html(`
//     <div>
//       <h3>1위.${data[i0].txt}</h3>
//     </div>
//     <div class="ranking2_3">
//       <div id="ranking2">
//         <img src="${data[i1].img}">
//         <p>2위.${data[i1].txt}</p>
//       </div>
//       <div id="ranking3">
//         <img src="${data[i2].img}" alt="">
//         <p>3위.${data[i2].data}</p>
//       </div>
//     </div>
//   `);
// }

// tabsChange(0, 1, 2);
