// input의 Dom element를 가져오기
const input = document.getElementById("input");
// addEventListener로 이벤트 등록, printInput 이벤트 핸들러 실행되게 하기
input.addEventListener('input', printInput); // printInput()가 아님

// result라는 ID를 가진 DOM을 resultDiv라는 이름으로 가져오기
const resultDiv = document.getElementById("result") // 변수 선언시에는 const나 let을 써줘야 함

// 각 id들이 생성될 때마다 담을 리스트 생성
timeoutIds = []
intervalIds = []


function printInput() {
  // input 태그에 입력한 값 letters로 가져오기
  const letters = input.value; // 이부분 모르겠음

  // setInterval을 벗어나면 실행되고 있는 모든 interval을 중단시킴
  intervalIds.forEach(clearInterval)
  
  // intervalIds 초기화
  intervalIds = []

  // result 내용 초기화
  result.innerHTML = ""; // 그냥 result=''가 아님. 그 안의 내용을 초기화하는 것

  // setTimeout 중단시키기
  timeoutIds.forEach(clearInterval);

  // timerIds 초기화
  timerIds = []

  // letters의 길이만큼 for문 돌리기
  for (i = 0; i < letters.lenth; i++) {                                                                                                                          
    // span element 생성하고 이름은 whiteLetter라고 하기
    const whiteLetter = document.createElement('span'); // 변수 선언시에는 const나 let 
    
    // span에 글자 넣기
    whiteLetter.textContent = letters[i];

    // 각 글자 i가 250ms 간격으로 딜레이되도록
    const intervalId = setTimeout(() => {
      // 500ms 마다 글자 색을 바꿔줌(투명 --> 검정 --> 투명 --> 검정 ...(반복))
      const timeoutId = setInterval(() => {
        // 글자 색을 투명으로 바꾸는 삼항 연산자
        whiteLetter.style.opacity = whiteLetter.style.opacity  === "0" ? 1: 0;
      }, 500)

      // intervalIds 리스트에 매번 생성되는 intervlId 추가
      intervalIds.push(intervalId);

      // 새로운 interval이 추가될 때마다 console 찍어보기
      console.log("새로운 interval 추가! 현재 intervalIds: ", intervalId);
    }, 250*i)

      // timeout Id가 생성될 때마다 timerIds 리스트에 추가하기
      timeoutIds.push(timerId);
      
    // result element 부분에 whiteLetter를 더하여 화면에 나타냄
    result.appendChild(whiteLetter);
  }
}