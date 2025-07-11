// // 0부터 4까지 콘솔찍는 코드
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("//////////////////");

// // 1부터 5까지 콘솔찍는 코드
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// console.log("//////////////////");

// // 1부터 10까지 홀수만 찍는 코드
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }
// console.log("//////////////////");

// 중첩반복문
// for (let i = 0; i < 2; i++) {
//   console.log(`i: ${i}`);
//   for (let j = 0; j < 2; j++) {
//     console.log(`j: ${j}`);
//   }
// }

// for(let i = 0; i<2; i++) {
//   console.log(`i:${i}`);
//   for(let j = 0; j<2 ; j++) {
//     console.log(`j: ${j}`);
//   }
// }
// console.log("//////////////////");

// for문 안에 들어가는 if문
// 1부터 10까지 짝수 찍기
// i는 반드시 0부터 시작해야함
// for (let i = 0; i <= 10; i += 2) {
//   if (i === 0) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("//////////////////");

// break문과 continue문
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) break;
// }
// console.log("//////////////////");

// for문과 array(배열)
// let arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log("//////////////////");

// let arr = ["a", "b" ,"c"];
// for (let i = 0; i< arr.length; i++) {
//   console.log(arr[i])
// }

// const user = {
//   name : "민수",
//   age: 25,
//   city : "서울"

//   for(const key in user){
//     console.log(`${key} : ${user[key]}`)
//   }
// }
// // for in 배열
// for (idx in arr) {
//   console.log(arr[idx]);
// }

// const fruits = ["사과", "바나나" ,"체리"];
// for (const idx in fruits) {
//   console.log(`인데스${idx}의 과일 : ${fruits[idx]}`);
// }
// for in 객체
// let obj = {
//   name: "철수",
//   age: 20,
// };
// for (let key in obj) {
//   console.log("key:", key);
//   console.log("val:", obj[key]);
// }
// console.log("//////////////////");

// let obj = {
//   name:"철수",
//   age:20,
// };
// for(let key in obj) {
//   console.log("key:", key)
//   console.log("val:", obj[key])
// }
// // for of 배열
// for (item of arr) {
//   console.log(item);
// }
// console.log("//////////////////");

// const fruits = ["사과", "바나나", "체리"];
// for (const fruit of fruits) {
//   console.log(`과일: ${fruit}`);
}
