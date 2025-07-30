const monthInfo = document.querySelector(".month");
const nowDate = new Date();

const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayName = ["일", "월", "화", "수", "목", "금", "토"];

const calenderBody = document.querySelector("tbody");
let currentYear = nowDate.getFullYear();
let currentMonth = nowDate.getMonth();
let currentDate = nowDate.getDate();
let currentDay = nowDate.getDay();
// 달력만들기
const renderCalender = (year, month) => {
  calenderBody.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");

  // 첫 주 빈칸
  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement("td");
    cell.classList.add("empty");
    row.appendChild(cell);
  }

  // 날짜 채우기
  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement("td");
    cell.textContent = day;
    row.appendChild(cell);

    if ((firstDay + day) % 7 === 0) {
      calenderBody.appendChild(row);
      row = document.createElement("tr");
    }
  }

  if (row.children.length > 0) {
    const emptyLength = 7 - row.children.length;
    for (let i = 0; i < emptyLength; i++) {
      const emptyCell = document.createElement("td");
      emptyCell.classList.add("empty");
      row.appendChild(emptyCell);
    }
    calenderBody.appendChild(row);
  }
};

renderCalender(currentYear, currentMonth);

const btn = document.querySelector(".button");
const gaugeBar = document.querySelector(".gauge_bar");

monthInfo.textContent = monthName[currentMonth];


const diaryInput = document.querySelector("#diary_input");
const diaryList = document.querySelector("#diary_list");
const addBtn = document.querySelector("#add_btn");
const todayInfo = document.querySelector(".today_info");

// 엔터키로 할 일 추가
diaryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (diaryInput.value !== "") {
      createList();
    } else {
      alert("내용을 작성해주세요");
    }
  }
});

// 버튼으로 할 일 추가
addBtn.addEventListener("click", () => {
  if (diaryInput.value !== "") {
    createList();
  } else {
    alert("내용을 작성해주세요");
  }
});

const createList = () => {
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");

  newList.appendChild(newSpan);

  newSpan.textContent = diaryInput.value;

  diaryList.appendChild(newList);

  diaryInput.value = "";
};

todayInfo.textContent = `📆 오늘의 날짜는 .... ${currentYear}년 ${
  currentMonth + 1
}월 ${currentDate}일 ${dayName[currentDay]}요일`;
