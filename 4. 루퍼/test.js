// 함수 표현식
// let sayHi = function() {
//   console.log( "Hello" );
// };

// 화살표 함수
// let sayHi = () => console.log("Hello");

// test(sayHi()); 


// condition 

// let result = (val) => val < 10;
// console.log(result(1)); // true

// function result(val) {
//   return (val < 10);
// }
// console.log(result(1)); // true

function test(initial, condition, task, fin) {
  let result = initial;
  // 10보다 작을 때까지
  while (condition(result)) {
    // task는 1++
    result = task(result);
  }
  if(fin) {
    fin(result);
  } 
}

test(
  0,
  (val) => val < 10,
  (val) => {
    console.log(val);
    return val + 1;
  }
)