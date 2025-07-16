const signUpBox = document.querySelectorAll(".sign_up_box");
const btn = document.querySelector(".btn");
const stepBar = document.querySelectorAll(".step_bar");
const red = document.querySelector(".input_red");
const green = document.querySelector(".input_green");

//step0
const state = document.getElementById("state");
const date = document.getElementById("date");
const agree = document.getElementById("agree_btn");

//step1
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telPattern = /^\d{3}-\d{4}-\d{4}$/;

//step2
const userName = document.getElementById("Username");
const passWord = document.querySelectorAll(".pw");

const idPattern = /^[a-zA-Z][a-zA-Z0-9]{9,23}$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

let i = 0;
let idx = 0;

//버튼 이벤트
btn.addEventListener("click", () => {
  if (!validateStep(i)) return;

  if (i === signUpBox.length - 1) {
    saveUserInfo();
    window.location.href = "/70_pf/steam/sub/sign_up_fin.html";
    return;
  }
  signUpBox[i].classList.remove("active");
  i++;
  signUpBox[i].classList.add("active");
  stepShow();
});

// 유효성 검사 조건에 따른 border 색상 변화
email.addEventListener("input", () => {
  email.classList.remove("input_red", "input_green");
  if (!emailPattern.test(email.value)) {
    email.classList.add("input_red");
  } else {
    email.classList.add("input_green");
  }
});

tel.addEventListener("input", () => {
  tel.classList.remove("input_red", "input_green");
  if (!telPattern.test(tel.value)) {
    tel.classList.add("input_red");
  } else {
    tel.classList.add("input_green");
  }
});

userName.addEventListener("input", () => {
  userName.classList.remove("input_red", "input_green");
  if (!idPattern.test(userName.value)) {
    userName.classList.add("input_red");
  } else {
    userName.classList.add("input_green");
  }
});

// passWord.forEach((elm) => {
//   elm.addEventListener("input", () => {
//     elm.classList.remove("input_red", "input_green");
//     if (!pwPattern.test(elm.value)) {
//       elm.classList.add("input_red");
//     } else {
//       elm.classList.add("input_green");
//     }
//   });
// });

// 스텝바 이벤트
const stepShow = () => {
  stepBar[idx].classList.remove("now_step");
  idx = (idx + 1) % stepBar.length;
  stepBar[idx].classList.add("now_step");
};

// form 유효성 검사
const validateStep = (step) => {
  if (step === 0) {
    if (state.value === "선택" || !date.value || !agree.checked) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
  }

  if (step === 1) {
    if (!firstName.value || !lastName.value || !email.value || !tel.value) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
    if (!emailPattern.test(email.value)) {
      alert("이메일 형식을 다시 확인해주세요.");
      return false;
    }
    if (!telPattern.test(tel.value)) {
      alert("전화번호 형식을 다시 확인해주세요");
      return false;
    }
    if (emailPattern.test(email.value)) {
      email.style.border = "1px solid green";
    } else {
      email.style.border = "1px solid red";
    }
  }

  if (step === 2) {
    if (!userName.value || !passWord[0].value || !passWord[1].value) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
    if (!idPattern.test(userName.value)) {
      alert("아이디 형식을 다시 확인해주세요.");
      return false;
    }
    if (!pwPattern.test(passWord[0].value)) {
      alert("비밀번호 형식을 다시 확인해주세요.");
      return false;
    }
    if (!pwPattern.test(passWord[1].value)) {
      alert("비밀번호 형식을 다시 확인해주세요.");
      return false;
    }
    if (passWord[0].value !== passWord[1].value) {
      alert("입력하신 비밀번호가 서로 다릅니다.");
      return false;
    }
  }
  return true;
};

// 로컬스토리지

const saveUserInfo = () => {
  const data = {
    state: document.querySelector("#state").value,
    date: document.querySelector("#date").value,
    agree: document.querySelector("#agree_btn").checked,
    lastName: document.querySelector("#last_name").value,
    firsName: document.querySelector("#first_name").value,
    email: document.querySelector("#email").value,
    tel: document.querySelector("#tel").value,
    userName: document.querySelector("#Username").value,
    passWord: document.querySelectorAll(".pw")[0].value,
  };
  const userList = JSON.parse(localStorage.getItem("signUpData")) || [];

  userList.push(data);

  localStorage.setItem("signUpData", JSON.stringify(userList));
};
