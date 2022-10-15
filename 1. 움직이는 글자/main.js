function printInput() {
  function ordinaryPrint() {
    let inputValue = document.getElementById('input').value;
    document.getElementById("result").textContent = inputValue;
  };
  ordinaryPrint();

  function disappearPrint() {
    let inputValue = document.getElementById('input').value;
    for (let i=0; i<inputValue.length; i++) {
      if (Math.floor(i/2) % 2 != 0) {
        console.log(inputValue[i]);
        inputValue = inputValue.replace(inputValue[i], ' ');
        document.getElementById("result").textContent = inputValue;
      }
    }
  };
  disappearPrint();
}