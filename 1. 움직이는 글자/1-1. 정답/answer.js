/*
 * 1. 각 글자가 500ms 간격으로 투명해졌다 나타났다 함 
 * 2. 글자 하나마다 250ms의 딜레이가 들어감
*/

// 각 id들이 생성될 때마다 담을 리스트 생성
let intervalIds = [];
let timerIds = [];

// input창에서 iput 이벤트가 발생하면 printInput 함수를 실행함
const input = document.getElementById("input"); // let --> const
input.addEventListener('input', printInput);

const resultDiv = document.getElementById("result");

function printInput() {
  // 입력받은대로 똑같이 써주기
  const letters = input.value;

  // input창 아래에 있는 result element를 빈 칸으로 초기화하기 
  result.innerHTML = "";
  console.log('새 글자 타이핑되어 Interval 모두 clear해야 함, 현재 intervalIds:', intervalIds)

  // for문보다 map/forEach 쓰기
  // intervalIds.forEach(intervalId => clearInterval(intervalId)) 와 아래는 같음
  // forEach 안의 내용이 다른데도 똑같은 이유: 똑같이 하나를 받아서 하나를 클리어하는 함수이기 때문
  intervalIds.forEach(clearInterval);

  // intervalIds 초기화
  intervalIds = []

  // setTimeout 멈추기
  for (let i = 0; i < timerIds.length; i++) {
    clearTimeout(timerIds[i]);
  }
  // timerIds 초기화
  timerIds = []

  for (let i = 0; i < letters.length; i++) {
    // 빈 span 태그 만들기
    const whiteLetter = document.createElement("span");
    // span에 글자 넣기.
    whiteLetter.textContent = letters[i];
    
    // input창에 글자를 빨리 치면 실제 글자 수보다 id가 많이 쌓이는 문제가 생김
    // 왜? setTimeout 함수가 끝나기 전에(500ms를 기다리는) id가 생성되어 문제가 생김
    // timeout이 끝나면 초기화를 하면 이 문제가 해결됨
    const timeoutId = setTimeout(() => { // let --> const
      // 글자마다 250ms의 간격으로 딜레이시킴(이게 글자가 움직이는 것처럼 보이게 함)
      const intervalId = setInterval(() => { // let --> const
        // 투명하게 만들기 500ms 간격으로
        whiteLetter.style.opacity = whiteLetter.style.opacity === "0" ? 1 : 0; // if문보다 삼항연산자 사용
      }, 500);
      // setInterval id가 생성될 때마다 intervalId 리스트에 추가
      intervalIds.push(intervalId);
      console.log('Interval 새로 추가함, 현재 intervalIds:', intervalIds)
    }, 250*i);
    // timeout Id가 생성될 때마다 timerIds 리스트에 추가
    timerIds.push(timeoutId)
    
    // 변경한 글자 화면에 추가하기
    result.appendChild(whiteLetter);
  }
}