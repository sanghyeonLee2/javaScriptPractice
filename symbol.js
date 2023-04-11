// 심벌 : 고유하며 객체 속성의 식별자로 사용 가능
// symbol : ES6에서 새로 추가된 원시 자료형
const me = Symbol("albe");
console.log(me);

const clone = Symbol("albe");
console.log(clone);

console.log(me == clone);
console.log(me === clone);
//두 심벌의 같은 동일하지만 심벌은 항상 고유하므로 겹치지 않는다

//심벌 사용으로 객체 속성에 대한 식별자 만들기 가능
const office = {
  Tom: "CEO",
  Mark: "CTO",
  Mark: "CTO", //이름이 같기 때문에 심벌 사용할 수 있음
};

for (person in office) {
  console.log(person);
}

const office1 = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CTO", //이름이 같기 때문에 심벌 사용할 수 있음
};

for (person in office1) {
  console.log(person); //심벌은 열거 X, for in으로 반복 못함
}

// const symbols = Object.getOwnPropertySymbols(office1); //getOwnPropertySymbols()로 열거 가능
// console.log(symbols);
// // 이후 map 사용 가능
// const value = symbols.map((symbol) => office1[symbol]);
// console.log(value);
