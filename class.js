function Person(name, age) {
  this.name = name;
  this.age = age;
} //생성자 함수 : 부모 (여기다가 속성 추가시 자식이 그 속성을 가짐)

// 프로토 타입에 새 메서드 추가
// 프로토 타입 : 객체에서 자동으로 생기는 **유전자!!**
// ex)우리가 키가 작은 이유: 유전자 때문
// XX.prototype.name = "kim" XX 유전자에 kim을 추가
// 프로토 타입에 뭔가 추가하면 자식들이 사용가능
Person.prototype.greet = function () {
  //여기다가 쓰면 부모만 속성을 가짐
  console.log("123123");
};
// 원리 : 자바스크립트에서 객체의 속성을 참조할 때 해당 속성이 없으면 부모 유전자를 뒤진다 있으면 출력한다.
// object에서 자료 뽑을때
// 1. 직접 자료 가지고 있으면 그거 출력
// 2. 없으면 부모유전자까지 뒤짐
// 3. 없으면 부모의부모...부모 없을떄까지 => prototype chain
// const 어레이 = [1,2,3]; ( 인간의 방식 )=> 어레이 같은 자료에.sort() 같은것 붙일 수 있는 이유?
// const 어레이 = new Array(1,2,3); ( 컴퓨터의 방식, Array라는 기계로 부터 자식을 하나 뽑아서 생성 )
// 모든 자료 다 똑같다
// sort, length 등 모두 부모 유전자에 기록되어 있어 사용 가능한 것이다!!!!
// 객체의 프로토타입을 직접 수정하는 것 보다
// 생성자 함수의 프로토타입에 속성을 추가하고,
// 이를 상속받는 객체를 생성하는 것이 일반적으로 더 좋은 방법
console.dir(Person);

const albe = new Person("Albe", 26); //자식(부모 데이터를 상속받는다)
const caroline = new Person("Caroline", 26);

albe.greet();
//123123
caroline.greet();
//123123
class Person1 {
  //클래스는 프로토타입을 대신하는 문법적 설탕일 뿐이다
  constructor(name, age) {
    //constructor : 클래스 객체의 초기 값을 지정하기 위해 객체가 생성될 때 실행되기로 약속한 함수
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} year`);
  }
  farewell() {
    console.log("goodbye");
  }
  static info() {
    //정적 메서드는 특정 클래스 인스턴스가 아닌 클래스 '전체’에만 필요한 기능을 만들 때 사용
    console.log("qwert");
  }
  set nicknames(value) {
    this.nickname = value;
    console.log(this.nickname);
  }
  get nicknames() {
    console.log(`nickname is ${this.nickname}`);
  }
  //getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행
  //setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행
}
const lee = new Person1("sang hyeon", 25); //인스턴스

//lee.info(); //error
lee.greet();
lee.farewell();
console.log((Person1.nicknames = "123")); //새터호출
console.log(Person1.nicknames); //게터호출

class Adult extends Person1 {
  constructor(name, age, work) {
    super(name, age);
    // Adult 클래스는 Person1 으로부터 이름과 나이를 상속받음
    // Person을 다시 선언하고 초기화 할 필요 X => super() 생성자가 하는 일이 바로 이것이다.
    // this 사용하기 전에 super()를 호출해야됨
    this.work = work;
  }
}
const lee1 = new Adult("lee", 23, "123");
console.log(lee1.age);
lee1.greet();

//배열 확장하기
//배열과 비슷하게 생겼지만 첫 번째 값은 교실 이름
//나머지는 학생 이름과 학생 점수를 나타내는 Classroom이라는 새로운 클래스
// const myClass = new Classroom(
//   "1A",
//   { name: "Tim", mark: 6 },
//   { name: "Tom", mark: 3 }
// );
//위 요구사항을 만족시키는 새로운 클래스는 다음과 같이 배열을 상속받아서 만듬
class Classroom extends Array {
  // 레스트 연산자 사용해 가변 인수로 입력받은 학생 정보
  // 배열 형태로 students에 할당
  constructor(name, ...students) {
    //스프레드 연산자 사용해 배열 원소들을 다시 풀어헤쳐 생성자를 호출
    // 스프레드 연산자를 사용하지 않으면
    // "학생들 정보가 들어있는 배열"을 원소로 가진 Array가 생성됨
    super(...students);
    this.name = name;
  }
  // 학생 추가 위한 새로운 메서드 추가
  add(student) {
    this.push(student);
  }
}

const myClass = new Classroom(
  "1A",
  { name: "Tim", mark: 6 },
  { name: "Tom", mark: 3 }
);

// 새로운 학생 추가
myClass.add({ name: "Lee", mark: 9 });

for (const student of myClass) {
  console.log(student);
}
console.log(myClass[2]);

class Qwe extends Person1 {
  constructor(name, age, work) {
    super(name, age);
    this.work = work;
  }
}

const me = new Qwe("Al", 23, "qweqweqwe");
console.log(me.work);
