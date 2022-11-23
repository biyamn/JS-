// 3개의 버튼 만들기. 이들을 합쳐서 buttons라고 함
const buttons = [
  {
    el: document.getElementById('btn-first'),
    score: 0,
  },
  {
    el: document.getElementById('btn-second'),
    score: 0,
  },
  {
    el: document.getElementById('btn-third'),
    score: 0,
  }
]

const scoreEl = document.getElementById('score');
const showScoreEl = document.getElementById('showScore');
let score = 0;

// 1번 - 숫자 섞기
function shuffleScores() {
  const ranNum = () => Math.random() - 0.5;
  const array = [100, 200, 300];

  // sort()안에 있는 수가 음수 or 양수이냐에 따라 내림차순/오름차순이 됨
  // sort 안에는 변수가 아니라 함수가 들어가야 하는구나..!
  // ranNum이 수인 줄 알았는데 함수였다. 
  // sort(0.1)은 오류가 나지만 sort(() => Math.random() - 0.5)은 정상동작한다.
  const shuffled = [...array].sort(ranNum); 
  buttons[0].score = shuffled[0];
  buttons[1].score = shuffled[1];
  buttons[2].score = shuffled[2];
}

// 2번 - 색 섞기, 글자 색 다크모드
function shuffleColors() {

  // 구조분해할당. el만 빼올 수 있음
  for (const { el } of buttons) {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255); 
    const blue = Math.round(Math.random() * 255);
    if (Math.floor((red + green + blue) / 3) > 128) {
      el.style.color = 'black';
    } else {
      el.style.color = 'white';
    }
    el.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

for (const button of buttons) {
  button.el.addEventListener('click', () => {
    score += button.score;

    // 바뀐 값 화면에 적용하기
    scoreEl.textContent = score;
    showScoreEl.textContent = button.score;

    // 값 바꾸기
    shuffleScores();
    shuffleColors();
  });
}
