const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 5000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 3000));
Promise.all([p1, p2]).then((result) => console.log(results));

const promise = new Promise((resolve) =>
  setTimeout(() => {
    let promisResult = "작업성공!";
    resolve(promisResult);
  }, 3000)
);

promise.then((result) => console.log("hohoho"));
promise.catch((err) => {
  console.log(err);
});
// resolve는 result, 곧 비동기함수 호출이 성공했을때 실행되는 곳으로
// 작업 성공해줘! resolve 해결해줘! 여기서는 resolve는 임의로 넣은 것이지만 걍 자주 쓰인다.
