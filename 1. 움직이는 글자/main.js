/**
 * 1. 각 글자가 500ms 간격으로 투명해졌다 나타났다 함 O
 * 2. 글자 하나마다 250ms의 딜레이가 들어감
 */

const input = document.getElementById("input"); // let -> const
const resultDiv = document.getElementById("result");

let intervalIds = [];
let timerIds = [];

input.addEventListener('input', printInput);

// main.js
function printInput() {
  // 입력받은대로 똑같이 써주기
  const letters = input.value;
  // document.getElementById("result").textContent = letters;
  // result = document.getElementById("result").innerHTML;

  result.innerHTML = "";
  console.log('새 글자 타이핑되어 Interval 모두 clear해야 함, 현재 intervalIds:', intervalIds)
  // intervalIds.forEach(timerId => clearInterval(timerId)) // 아래보다 map/forEach로 하기
  intervalIds.forEach(clearInterval) // clearInterval도 하나를 받아서 하나를 클리어하는 함수!(예제: 캡쳐)

  // for (let i = 0; i < intervalIds.length; i++) {
  //   clearInterval(intervalIds[i])
  // }
  intervalIds = [] // 이해 함.....!!!!!

  for (let i = 0; i < timerIds.length; i++) {
    clearTimeout(timerIds[i]);
  }
  timerIds = []
  
  // let timerId = setInterval(() => {
  for (let i = 0; i < letters.length; i++) {
    // 빈 span 태그 만들기
    const whiteLetter = document.createElement("span");
    // span에 id를 인덱스로 부여하기
    // whiteLetter.id = `${i}`; // 필요 없음
    // span에 글자 넣기.
    whiteLetter.textContent = letters[i];
    
    // 빨리 치면 id 많이 쌓이는,,거 해결하기,,, timeout 초기화,,,
    const timerId2 = setTimeout(() => { // const로
      const timerId = setInterval(() => { // const로
        whiteLetter.style.opacity = whiteLetter.style.opacity === "0" ? 1 : 0; // if문보다 삼항연산자로
      }, 500);
      intervalIds.push(timerId)
      console.log('Interval 새로 추가함, 현재 intervalIds:', intervalIds)
      // DOM 객체 하나에 들어감. result는 string라서 안됨..
      // console.log(`${i}`);
      // whiteLetter.style.color = "blue";
      // document.getElementById(`${i}`).appendChild(whiteLetter); // 오류
      // document.getElementsByTagName('span').appendChild(whiteLetter); // 오류
      // result.appendChild(whiteLetter); // 여기 있으면 안됨
    }, 250*i);
    timerIds.push(timerId2)
    
    result.appendChild(whiteLetter);
    // setTimeout(() =>

    //   1000
    // );
    // }
    // }, 1000)
  }
}

// 2개씩 짝지어서 움직이게 하는 코드
// for (let i=0; i<letters.length; i++) {
//   letters = letters.replace(letters[4*i+2], ' ').replace(letters[4*i+3], ' ');
//   document.getElementById("result").textContent = letters;
//   console.log(letters);
// }

// function printInput() {
//   for (let i=0; i<document.getElementById('input').value.length; i++) {
//     console.log(document.getElementById('input').value[i].display='none');
//   }
// }
