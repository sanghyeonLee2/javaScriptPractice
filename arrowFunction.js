function exam() {
  console.log(arguments[0]);
  console.log(any);
  //화살표 함수에서 argument 객체는 부모 스코프의 값을 상속, 함수 내부에서 접근 가능한 배열 객체, 해당함수에 전달된 인수의 값을 담음
}
exam(1, 2, 3);

const showWinner = (...args) => {
  const winner = args[0];
  console.log(`${winner} was the winner`);
};

showWinner("Lee", "sang", "hyeon");
