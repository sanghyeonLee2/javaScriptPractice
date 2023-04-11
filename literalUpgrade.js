//변수를 키와 값으로 하는 객체
const surname = "Lee";
const age = 24;

const person = {
  surname: surname,
  age: age,
  greet() {
    //객체 내에서 함수 추가하는 문법
    console.log("123");
  },
};

console.log(person); // 예전코드

const person1 = { surname, age };
console.log(person1); //es6 => 단순화 가능!!

person.greet();

//객체 속성 동적 정의 방법 ES5 : 생성한 다음 수정
const name1 = "myname";
const man = {};
man[name1] = "Albe";
console.log(man.myname);

//ES6로 객체 속성 동적 정의 : 생성과 수정 동시 가능
const man1 = {
  [name1]: "qwe",
};
console.log(man1.myname);
console.log(man1);
console.log(man);
