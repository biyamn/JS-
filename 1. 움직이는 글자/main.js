function printInput() {
  let inputValue = document.getElementById('input').value;
  document.getElementById("result").textContent = inputValue;
}

function appearDisappear() {
  console.log(1)
  let inputValue = document.getElementById('input').value;
  for (let i=0; i<inputValue.length; i++) {
    if (i%4 === 0) {
      inputValue = inputValue.replace(inputValue[i], ' ').replace(inputValue[i+1], ' ');
      console.log(inputValue);
      document.getElementById("result").textContent = inputValue;
    }
  }
}

