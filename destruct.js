var person = {
  first: "Arbe",
  last: "Mon",
}; //객체 디스트럭쳐링 : 객체에서 변수 생성

//변수 (실행 컨텍스트 안에 있는 이름과 값 사이의 관계) vs 프로퍼티 (맴버 변수, 객체의 일부, 이름과 값 사이의 관계 호이스팅X)
console.log(person.first);
var first = person.first; //예전방식
var last = person.last;
console.log(first);
console.log(last);

const man = {
  fir: "qwe",
  sec: { social: { facebook: "1234" }, web: "www.qwe" },
  las: "asd",
};

const { fir, las } = man;
//디스트럭쳐링 이용해 person에 가진 속성에 접근함과 동시에 해당속성 이름으로 변수 선언 가능
const { facebook } = man.sec.social; //중첩된 경우
const { facebook: fb } = man.sec.social; //변수 이름 변경 가능
const { facebook: url = "https:// www.facebook.com" } = man.sec.social; //기본값 재 설정 가능, 기본값이 없으면 설정 가능
console.log(`fir의 값은 ${fir}`);
console.log(`facebook의 값은 ${facebook}`);
console.log(`las의 값은 ${las}`);
console.log(`fb의 값은 ${fb}`);
console.log(`url의 값은 ${url}`);
//1234

//배열 구조분해 할당
const woman = ["Lee", "Sang Hyeon", 25]; //25는 할당X
const [firstName, surname] = woman;
console.log(`성은 ${firstName}, 이름은 ${surname}`);

const people = ["a", "b", "c", "d"];
const [a, ...d] = people;
//나머지 모든값을 얻고 싶다면 레스트 연산자 사용 : ...

console.log(people);
let hungry = "yes";
let full = "no";
[hungry, full] = [full, hungry]; // 두 변수의 값 교체
console.log(hungry, full);
