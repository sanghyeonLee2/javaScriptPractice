//함수 기본값 인수
function cal(total, tax = 0.1, tip = 0.05) {
  return total + total * tax + total * tip;
}
console.log(cal(100, 0.15));
console.log(cal(100, undefined, 0.15));
//디스트럭쳐링 : 함수 호출 시 매개변수가 주어진 키에 맞춰 입력됨, 매개변수 순서에 대해 걱정X
function cal1({ total, tax = 0.1, tip = 0.05 } = {}) {
  // ={} 를 추가해야 인수를 기본적으로 객체로 설정
  return total + total * tax + total * tip;
}
const bill = cal1({ tip: 0.15, total: 150 });
console.log(bill);
