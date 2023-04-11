const test = {
  color: "red",
  log: function () {
    console.log(this.color);
  },
};

const check = test.log;
console.log(check()); // 전역범위 => 값 : window 객체
const getColor = check.bind(test); // this의 값 수동으로 설정할 떄 bind 사용
console.log(getColor()); //red

function Car(maker, color) {
  // 생성자 함수 : 첫글자 대문자
  // 생성자 함수 사용 이유 : 유사한 객체를 여러 개 만들어야 할 때 사용
  this.carMaker = maker; //메서드 내부에서 this 키워드를 사용하면 객체에 접근가능
  this.carColor = color;
}

function MyCar(maker, color) {
  Car.call(this, maker, color); //call : this의 값을 설정하며 인수의 목록을 받음, 인수를 개별적으로 전달 해야됨
  Car.apply(this, [maker, color]); //인수 목록을 배열로 받음, 함수에 필요한 인수의 수 모르거나 알 필요 없을 때
  //call()에 MyCar객체를 전달 : this.carMaker === 인수로 전달한 maker
  this.age = 5;
}

const myNewCar = new MyCar("bmw", "red");
console.log(myNewCar.carMaker);
console.log(myNewCar.carColor);

// const ourFunction = function (item, method, args) {
//   method.apply(args);
// };

// ourFunction(item, method, ["arg1", "arg2"]);
// ourFunction(item, method, ["arg1", "arg2", "arg3"]); //전달하는 인수의 수에 관계 없음, 개별적으로 인수 적용
// function cal(tot, tax = 0.1, tip = 0.05) {
//   return tot + tot * tax + tot * tip;
// }

//console.log(cal(10));
