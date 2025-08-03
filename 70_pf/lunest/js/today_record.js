const monthInfo = document.querySelector(".month");
const calenderBody = document.querySelector("tbody");
const diaryInput = document.querySelector("#diary_input");
const diaryList = document.querySelector("#diary_list");
const addBtn = document.querySelector("#add_btn");
const todayInfo = document.querySelector(".today_info");
const gaugeBar = document.querySelector(".gauge_bar");

const nowDate = new Date();
let currentYear = nowDate.getFullYear();
let currentMonth = nowDate.getMonth();
let currentDate = nowDate.getDate();
let currentDay = nowDate.getDay();

const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayName = ["일", "월", "화", "수", "목", "금", "토"];

monthInfo.textContent = monthName[currentMonth];
todayInfo.textContent = `📆 오늘의 날짜는 .... ${currentYear}년 ${currentMonth + 1}월 ${currentDate}일 ${dayName[currentDay]}요일`;


// 해당 날짜에 맞춰 달력 cell 채우기
const renderCalender = (year, month) => {
  calenderBody.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement("td");
    cell.classList.add("empty");
    row.appendChild(cell);
  }

  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement("td");
    cell.textContent = day;
    cell.dataset.date = `${year}-${month + 1}-${day}`;
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

// 일기, 출석기록 로컬스토리지 키
const DIARY_STORAGE_KEY = 'diary_entries';
const STAMP_STORAGE_KEY = 'diary_records';

const getTodayString = () => `${currentYear}-${currentMonth + 1}-${currentDate}`;

// 저장된 일기 불러오기
const loadDiaryEntries = () => JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY)) || [];

// 저장된 도장 기록 불러오기
const loadStampRecords = () => JSON.parse(localStorage.getItem(STAMP_STORAGE_KEY)) || [];

const saveDiaryEntry = (entry) => {
  const entries = loadDiaryEntries();
  entries.push(entry);
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
};

const saveStampRecord = (date) => {
  const records = loadStampRecords();
  if (!records.includes(date)) {
    records.push(date);
    localStorage.setItem(STAMP_STORAGE_KEY, JSON.stringify(records));
  }
};

const stampDate = (dateStr) => {
  const dateCell = document.querySelector(`td[data-date="${dateStr}"]`);
  if (!dateCell || dateCell.querySelector('img.stamp')) return;

  const img = document.createElement('img');
  img.src = '../images/today_record/stamp.png';
  img.classList.add('stamp');
  img.style.position = 'absolute';
  img.style.top = '50%';
  img.style.left = '50%';
  img.style.transform = 'translate(-50%, -50%)';
  img.style.width = '50px';
  dateCell.appendChild(img);
};

const isDiaryExistToday = () => {
  return loadStampRecords().includes(getTodayString());
};

const updateGauge = () => {
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // 이번 달 총 일수
  const stampCount = loadStampRecords().length; // 도장 찍힌 날짜 수
  const percentage = (stampCount / totalDays) * 100;
  gaugeBar.style.width = `${percentage}%`;
};

const createList = () => {
  if (isDiaryExistToday()) {
    alert('오늘 일기는 이미 작성했습니다.');
    return;
  }

  const entryText = diaryInput.value;
  const newList = document.createElement("li");
  newList.textContent = entryText;
  diaryList.appendChild(newList);

  diaryInput.value = "";

  saveDiaryEntry({ date: getTodayString(), text: entryText });
  saveStampRecord(getTodayString());
  stampDate(getTodayString());

   updateGauge();
};

diaryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && diaryInput.value.trim()) createList();
});

addBtn.addEventListener("click", () => {
  if (diaryInput.value.trim()) createList();
});

// 페이지 초기화 (일기, 도장 불러오기)
const initialRender = () => {
  const entries = loadDiaryEntries();
  entries.forEach(entry => {
    const newList = document.createElement("li");
    newList.textContent = entry.text;
    diaryList.appendChild(newList);
  });

  const stamps = loadStampRecords();
  stamps.forEach(stampDate);
  updateGauge();
};

initialRender();
