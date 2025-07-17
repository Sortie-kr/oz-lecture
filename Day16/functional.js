// function add(a, b) {
//   return a + b;
// }
// const result1 = add(2, 3); //5
// const result2 = add("나는", "태민");
// const result3 = add(true, false);

// let num1 = 2;
// let num2 = 3;
// const result4 = add(num1, num2); // 인수

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;

// function addTotal(add1) {
//   return add1;
// }

// addTotal(1);
// let a = addTotal(add(1, 2));
// console.log(a);

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

function addTotal(피자, 햄버거) {
  return add(피자, 햄버거);
}
const total = addTotal(add(1, 2), add(3, 4));
console.log(total);
{
  /* <button onclick="handleClick()"> </button> */
}

// const add5 = add(5);
// const add5and10 = add5(10);
