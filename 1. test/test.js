let inputValue = '1234567890가나다라마바사'

for (let i=0; i<inputValue.length; i++) {
  if (i%4 === 0) {
    inputValue = inputValue.replace(inputValue[i], ' ').replace(inputValue[i+1], ' ');
  }
  console.log(inputValue);
}
