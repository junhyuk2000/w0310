const idElement = document.getElementById("user_id");
const pwElement = document.getElementById("user_pw");

const btn = document.getElementById("btn");

const idShow = document.querySelector(".id_show");
const pwShow = document.querySelector(".pw_show");

btn.addEventListener("click", () => {
  let userInfo = { id: idElement.value, pw: pwElement.value };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
});

let local = JSON.parse(localStorage.getItem("userInfo"));

idShow.textContent = `id : ${local.id}`;
