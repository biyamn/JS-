function printInput() {
  // 입력받은 값을 아래의 div에 똑같이 써준다.
  function ordinaryPrint() {
    let inputValue = document.getElementById('input').value;
    document.getElementById("result").textContent = inputValue;
  };
  ordinaryPrint();

  function disappearPrint() {
    // 무한 반복한다. 새로운 값이 입력되기 전까지
    // while (새로운 값 입력되기 전)) {
      let inputValue = document.getElementById('input').value;
      // 이중 for문 시작,,, 오른쪽으로 움직이도록 인덱스를 증가시킨다? 
      // 근데 끝을 지나면 앞으로 다시 돌아오게 해야 함
      // for(let i=0; i<inputValue.length; i++) {
      // 2글자 간격으로 2개씩 글자를 스페이스로 대체한다
        for (let j=0; j<inputValue.length; j++) {
            inputValue = inputValue.replace(inputValue[4*j+2], ' ').replace(inputValue[4*j+3], ' ');
            console.log(inputValue)
            document.getElementById("result").textContent = inputValue;
          }
        // }
    // }
  }
  disappearPrint();
}