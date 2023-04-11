const fruitBasket = ["apple", "banana", "orange"];
fruitBasket.unshift("melon");
console.log(fruitBasket);
fruitBasket.shift();
console.log(fruitBasket);

//Array.from() : 배열스러운 객체를 박아 실제 배열로 변환해 반환
const fruits = document.querySelectorAll(".abc p");
// fruits는 3개의 p 태그를 포함한 노드 리스트 (배열과 비슷한 구조)
const fruitArray = Array.from(fruits, (fruit) => {
  console.log(fruit);
});
console.log(fruitArray);
// [p,p,p]

//Array.of() : 전달받은 인수로 배열 생성
const digits = Array.of(1, 2, 3, 4, 5);
console.log(digits);

//Array.find() : 테스트 함수를 충족하는 배열의 첫번째 원소 반환
const arr = [1, 2, 3, 4, 5];
let found = arr.find((e) => e > 3);
console.log(found);
//Array.findIndex() : 조건과 일치하는 첫번째 원소의 인덱스 반환
let fndIdx = arr.findIndex((e) => e === 2);
console.log(fndIdx);
//Array.some() : 조건과 일치하는 원소 검색, 첫번째 일치하는 원소 찾으면 바로 중지
let arraySome = arr.some((e) => e > 2);
console.log(arraySome); //true
//Array.every() : 모든 원소가 주어진 조건과 일치하는지 여부 확인
let arrayEvery = arr.every((e) => e > 2);
console.log(arrayEvery); //false

const apple = "Apple";

const myArr = Array.from(apple);
console.log(myArr);
