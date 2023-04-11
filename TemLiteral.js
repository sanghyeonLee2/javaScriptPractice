let person = "Alberto";
let age = 25;

function myTag(strings, perName, perAge) {
  //strings = ["That", "is a", "!" ]
  let str = strings[1];
  let ageStr;
  perAge > 50 ? (ageStr = "grandpa") : (ageStr = "youngster");
  return perName + str + perAge;
}
let sen = myTag`That ${person} is a ${age}!`; //템플릿 내부의 모든 항목이 태그된 함수의 인수로 제공
console.log(sen);

let str = `this is a very long text\na very long text`;
console.log(str);
