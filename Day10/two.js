let num1 = 10;
let num2 = 20;

console.log(num1);
console.log(num2);

//이항 산술연산자
let sum = 10 + 20;
let sub = 20 - 10;
let multi = 10 * 20;
let div = 10 / 2;
let remain = 10 % 3; // remain ; 나머지를 구하는 것 ex)몫은 3, 나머지1
let expon = 2 ** 3; // 익스퍼낸셜
console.log("sum", sum);
console.log("sub", sub);
console.log("multi", multi);
console.log("div", div);
console.log("remain", remain);
console.log("expon", expon);

let sumNum1Num2 = num1 + num2;
let subNum1Num2 = num1 - num2;
let multiNum1Num2 = num1 * num2;
let divNum1Num2 = num1 / num2;
let remainNum1Num2 = num1 % num2;
let exponNum1Num2 = num1 ** num2;
let subNum2Num1 = num2 - num1;
console.log("num1+num2", sumNum1Num2);
console.log("num1-num2", subNum1Num2);

let totalSum = sumNum1Num2 + subNum1Num2 + subNum2Num1;
console.log("sumNum1Num2 + subNum1Num2 subNum2Num1", totalSum);
