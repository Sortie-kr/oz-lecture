console.log(10 == 10); // true
console.log(11 == 20); // false

let a = 5;
let b = 2;
let c = 10;
console.log(a + b == 10); // false
console.log(a + a == 10); // true

console.log(a + b != 10); // false
console.log(a + a != 10); // true

console.log(a + b == c); // false
console.log(a + a == c); // true

console.log(a + b != c); // false
console.log(a + a != c); // true

console.log(a * b < c); // false
console.log(a * b <= c); // false

console.log(c / b < a); // false
console.log(c / b >= a); // false
