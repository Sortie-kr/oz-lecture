//input

let input = Number(prompt("점수를 입력하세요"));
console.log(`원점수 : ${input}`);

const MAX_SCORE = 100;
let score;
var grade;
let lastScore = input + 5;
console.log(`최종점수 : ${lastScore}`);

if (isNaN(input) || input < 0 || input > MAX_SCORE) {
  alert("Invalid Score! Please enter a number Between 0 and 100");
  grade = "Invalid";
} else {
  if (lastScore >= 100) {
    grade = "S";
  } else if (lastScore >= 90) {
    grade = "A";
  } else if (lastScore >= 80) {
    grade = "B";
  } else if (lastScore >= 70) {
    grade = "C";
  } else if (lastScore >= 60) {
    grade = "D";
  } else if (lastScore < 60) {
    grade = "F";
  }
}

let Message;

switch (grade) {
  case "S":
    Message = "SUPER";
    break;
  case "A":
    Message = "Excellent Work!";
    break;
  case "B":
    Message = "Good job!";
    break;
  case "C":
    Message = "Satisfactory performance.";
    break;
  case "D":
    Message = "Needs improvement.";
    break;
  case "F":
    Message = "Please try harder";
    break;
  default:
    Message = "점수 오류입니다. 다시입력해주세요";
    break;
}

//합격여부
let pass = lastScore >= 60;
let passMessage = pass ? "pass" : "fail";

//출력
console.log("\n\n\n", "Final Score", lastScore);
console.log(`Grade : ${grade}`);
console.log(`Status : ${passMessage}`);
console.log(`Message : ${Message}`);
