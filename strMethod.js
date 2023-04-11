const str = "this is a short sentence";
console.log(str.indexOf("short"));
//문자열에 지정된 값이 처음 나타나는 위치를 반환한다.
console.log(str.slice(0, 5));
//문자열의 지정된 부분을 새 문자열로 반환한다.
console.log(str.toUpperCase());
//문자열 내의 모든 문자를 대문자로 바꾼다.
console.log(str.toLowerCase());
//문자열 내의 모든 문자를 소문자로 바꾼다.

//ES6 새로운 문자열 메서드
const code = "ABCDEFG";
console.log(code.startsWith("ABB"));
console.log(code.startsWith("ABC"));
//매개변수로 받은 값으로 문자열이 시작하는지 확인한다.
console.log(code.endsWith("DDD"));
console.log(code.endsWith("EFG"));
//매개변수로 받은 값으로 문자열이 끝나는지 확인한다.
console.log(code.endsWith("EF", 3));
console.log(code.endsWith("EF", 6));
//추가 매개변수로 문자열의 얼마큼만을 확인할지 길이를 전달 가능.
console.log(code.includes("ABC"));
console.log(code.includes("QWR"));
//우리가 전달한 값이 문자열에 포함되어 있는지 확인 가능
console.log(code.repeat(10));
//문자열을 반복하며 횟수를 인수로 받음
