//프로미스 : 비동기 작업의 최종 성공 또는 실패를 나타냄
const myPromise = new Promise((resolve, reject) => {
  resolve("The");
});
//resolve : 성공 알리기, reject 실패 알리기
myPromise.then((data) => {
  console.log(data);
});
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("123");
  }, 2000);
});
myPromise.then((data) => {
  console.log(data);
});
