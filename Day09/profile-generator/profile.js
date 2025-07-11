const NAME = "송재영";
let templateString = `\n \t 나의 이름은 ${NAME} 입니다.`;
var age = 33;
let boolean = 2025 < 2026;
var height = undefined;
const MIND = 20;
const marriageIf = "married";
let jobString1 = " \n \t 밸류를 설계하는";
let jobString2 = `인디해커 ${NAME} 입니다.`;
let statusString1 = `\n \t 나이는 ${age}살 이지만`;
let statusString2 = `마인드는 ${MIND}살입니다.`;

let stringA = jobString1 + " " + jobString2;
let stringB = statusString1 + " " + statusString2;

console.log("Hello", templateString);
console.log("About me", stringA);
console.log("Passion", stringB);
let hobbyList = {
  hobby1: "\n \t Reading",
  hobby2: "Trombone",
  hobby3: "Digging",
};
console.log(
  "My hobbies",
  hobbyList.hobby1 + "," + hobbyList.hobby2 + "," + hobbyList.hobby3
);

let Profile = {
  name: "송재영",
  age: 33,
  isFutureBright: 2025 < 2026,
  height: undefined,
  mindAge: 20,
  marriageStatus: "married",
  job: "밸류를 설계하는 인디해커",
  hobbies: ["Reading", "Trombone", "Digging"],
};

console.log(`\n\t 안녕하세요, 제이름은 ${Profile.name}입니다.`);
console.log(
  `\n\t 나이는 ${Profile.age}이지만, 마인드는 ${Profile.mindAge}입니다.`
);
console.log(`\n\t 직업은 ${Profile.job}입니다.`);
console.log(`\n\t 혼인여부 : ${Profile.marriageStatus}`);
console.log(`\n\t 취미는 ${Profile.hobbies}입니다.`);

console.log(typeof Profile.mindAge);
console.log(typeof Profile.job);
