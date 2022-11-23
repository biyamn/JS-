const buttons = [
  {
    el: document.getElementById("btn-first"),
    score: 0,
  },
  {
    el: document.getElementById("btn-second"),
    score: 0,
  },
  {
    el: document.getElementById("btn-third"),
    score: 0,
  },
];
const scoreEl = document.getElementById("score");
const showScoreEl = document.getElementById("showScore");
const buttonScores = [];
let score = 0;

// 1번 - 숫자 섞기
function shuffleScores() {
  const ranNum = () => Math.random() - 0.5;
  const array = [100, 200, 300];
  const shuffled = [...array].sort(ranNum);

  buttons[0].score = shuffled[0];
  buttons[1].score = shuffled[1];
  buttons[2].score = shuffled[2];
}

// 2번 - 색 섞기, 글자 색 다크모드
function shuffleColors() {
  for (const { el } of buttons) {
    const red = Math.round(Math.random() * 0xff);
    const green = Math.round(Math.random() * 0xff);
    const blue = Math.round(Math.random() * 0xff);
    if (Math.floor((red + green + blue) / 3) > 128) {
      el.style.color = "black";
    } else {
      el.style.color = "white";
    }

    el.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
  }
}

for (const button of buttons) {
  button.el.addEventListener("click", () => {
    score += button.score;
    scoreEl.textContent = score.toString();
    showScoreEl.textContent = button.score;
    shuffleScores();
    shuffleColors();
    showScore();
  });
}

shuffleScores();
