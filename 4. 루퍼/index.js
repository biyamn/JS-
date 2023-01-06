/**
 * 초기값으로 시작해서, 지정한 조건이 참인 동안 작업을 실행하고,
 * 조건이 거짓이 되면 마무리 작업을 실행하는 함수
 *
 * @param initial 내부 변수의 초기값
 * @param condition 내부 변수를 입력으로 받아, 반복을 계속할지 말지를 반환하는 함수
 * @param task 내부 변수를 입력으로 받아, 작업을 실행한 후 결과를 반환하는 함수. 실행 결과는 내부 변수에 다시 대입되어야 함
 * @param fin 반복이 끝났을 때 내부 변수를 입력으로 받아 실행되는 동작, undefined일 수 있음
 */
function looper(initial, condition, task, fin) {
  let result = initial;
  while (condition(result)) {
    result = task(result);
  }
  if (fin) {
    fin(result);
  }
}

//숏코딩... 재귀와 함께하는...
function looper(initial, condition, task, fin) {
  condition(initial)
    ? looper(task(initial), condition, task, fin)
    : fin?.(initial);
}

// 0부터 condition의 조건이 맞을 때까지 task를 돌린다.
looper(
  0,
  (val) => val < 10,
  (val) => {
    console.log(val);
    return val + 1; // 돌 때마다 실행
  }
);

// 0부터 condition의 조건이 맞을 때까지 task를 돌린 후 fin을 한다
looper(
  "ㅋ",
  (val) => val.length < 20,
  (val) => val + "ㅋ",
  (val) => console.log(val) // 모아서 한 번에 실행
);
