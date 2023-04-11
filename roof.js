const fruits = ["apple", "banana", "orange"];
//for of는 값을 반환
for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// orange
const car = {
  maker: "bmw",
  color: "red",
  year: "2022",
};

//객체복사
const secondCar = Object.assign({}, car); //첫번째 인수 : 복사본, 두번째 인수 : 원본
car.wheels = 4;
console.log(car);
console.log(secondCar);

// for of 객체의 모든 키 가져옴
for (const prop of Object.keys(car)) {
  //for of는 값을 반환한다.    *ES6문법
  const value = car[prop];
  console.log(`for of 예시 ${(prop, value)}`);
}

//객체 키/값 쌍에 대해 반복
for (const prop of Object.entries(car)) {
  const value = car[prop];
  console.log(`Object.entries() 예시 ${(prop, value)}`);
}

for (const prop in car) {
  //for in은 키의 목록을 반환한다.
  console.log([prop, car[prop]]);
}
