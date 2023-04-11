//배열 결합
const abc = ["a", "b", "c"];
const def = ["d", "e", "f"];

const menu = [...abc, "0", ...def];

console.log(menu);

//배열 복사 : 배열 복사본 생성시 매우 유용
const newArr = menu;
console.log(newArr);
//배열을 복사해서 새 배열을 만든게 아님 오로지 참조만 함
const newArray = [...menu]; //진짜 배열 복사

const abcd = ["a", "b", "c", "d"];

const exam = (a, b, c, d) => {
  console.log(`!@3`);
};
exam(...abcd);

//레스트 매개변수 : 점3개는 스프레드 문법과 같지만 기능적은 반대, 여러 원소를 하나로 압축
const [fir, sec, ...etc] = abcd;

console.log(etc);
//[ 'c', 'd' ]
console.log(...etc);
//c d

const veggie = ["tomato", "cucumber", "beans"];
const meat = ["pork", "beef", "chicken"];
const menuList = [...veggie, ...meat, "pasta"];
console.log(menuList);
