//input

let input = prompt("점수를 입력하세요");
console.log(`원점수 : ${input}`);

const MAX_SCORE = 100;
let score;
var grade;
let lastScore = input + 5;
console.log(`최종점수 : ${lastScore}`);

if (NaN(input) || input < 0 || input > MAX_SCORE) {
  alert("Invalid Score! Plaese enter a number Between 0 and. 100.");
  grade = "Invalid";
} else {
  if (lastscore >= 100) {
    grade = "S";
  } else if (lastScore >= 90) {
    grade = "A";
  } else if (lastScore >= 90) {
    grade = "B";
  } else if (lastScore >= 80) {
    grade = "C";
  } else if (lastScore >= 70) {
    grade = "D";
  } else if (lastScore < 60) {
    grade = "F";
  }
}

switch (grade) {
  case "S":
    var Message = "SUPER";
    break;
  case "A":
    var Message = "Excellent Work!";
    break;
  case "B":
    var Message = "Good job!";
    break;
  case "C":
    var Message = "Satisfactory performance.";
    break;
  case "D":
    var Message = "Needs improvement.";
    break;
  case "F":
    var Message = "Please try harder";
    break;
  default:
    var Message = "점수 오류입니다. 다시입력해주세요";
    break;
}

//합격여부
let pass = lastScore > 60;
let passMessage = pass ? "pass" : "fail";

//출력
console.log("/n/n/n", "Final Score", lastScore);
console.log(`Grade : ${grade}`);
console.log(`Status : ${passMessage}`);
console.log(`Message : ${message}`);
