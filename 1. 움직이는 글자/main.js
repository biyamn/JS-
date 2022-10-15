function printInput() {
  function ordinaryPrint() {
    let inputValue = document.getElementById('input').value;
    document.getElementById("result").textContent = inputValue;
  };
  ordinaryPrint();

  function disappearPrint() {
    let inputValue = document.getElementById('input').value;
    for (let i=0; i<inputValue.length; i++) {
        inputValue = inputValue.replace(inputValue[4*i+2], ' ').replace(inputValue[4*i+3], ' ');
        document.getElementById("result").textContent = inputValue;
        console.log(document.getElementById("result"));
      }
    }
  disappearPrint();
}