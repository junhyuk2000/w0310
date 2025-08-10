const input = document.querySelector('.submit_box input');
const strikeZone = document.querySelector('.strike_zone');
const log = document.querySelector('.log');

// 1~9로만, 중복없는 3자리 정답 생성
const makeAnswer = () => {
  const nums = [1,2,3,4,5,6,7,8,9];
  const res = [];
  while (res.length < 3) {
    const n = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
    res.push(n);
  }
  return res;
};

let answer = makeAnswer(); 
strikeZone.textContent = '게임 시작! 3자리 입력';

// input 입력 조건
input.addEventListener('input', () => {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 3);
});

// Enter키로 summit
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSubmit();
});

function handleSubmit() {
  const inputVal = input.value.trim();

  if (inputVal.length !== 3) return flash('정확히 3자리로 입력');
  if (inputVal.includes('0')) return flash('1~9만 가능 (0 제외)');
  if (/(\d).*\1/.test(inputVal)) return flash('중복 숫자 금지');

  const guess = inputVal.split('').map(Number);
  const { s, b } = checkGuess(guess, answer);

  if (s === 3) {
    strikeZone.textContent = `${s}S ${b}B — 정답!`;
    addLog(inputVal, `${s}S ${b}B`);
    input.disabled = true; // 끝
    return;
  }

  if (s === 0 && b === 0) {
    strikeZone.textContent = 'OUT';
    addLog(inputVal, 'OUT');
  } else {
    strikeZone.textContent = `${s}S ${b}B`;
    addLog(inputVal, `${s}S ${b}B`);
  }

  input.value = '';
  input.focus();
}

function checkGuess(guess, ans) {
  let s = 0, b = 0;
  for (let i = 0; i < 3; i++) {
    if (guess[i] === ans[i]) s++;
    else if (ans.includes(guess[i])) b++;
  }
  return { s, b };
}

function addLog(num, res) {
  const div = document.createElement('div');
  div.textContent = `${num} → ${res}`;
  log.prepend(div);
}

function flash(text) {
  strikeZone.textContent = text;
}
