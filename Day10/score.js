// 점수를 입력받아 등급을 출력하는 프로그램
// 사용자 입력
let inputStr = prompt("점수를 입력하세요.");
console.log(`입력값 : ${inputStr}`);
let input = parseInt(inputStr);
console.log(`원점수: ${input}`);

// 최종점수 계산
const MAX_SCORE = 100;
let score;
var grade;
let lastScore = input + 5; // 마지막 점수는 입력받은 점수에 5를 더한 값
console.log(`최종 점수: ${lastScore}`);

// 등급 결정
if (isNaN(input) || input < 0 || input > MAX_SCORE) {
  alert("Invalid score! Please enter a number between0 and 100.");
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
  } else {
    grade = "F";
  }
}

// 멘트 결정
switch (grade) {
  case "S":
    var Message = "Super";
    break;
  case "A":
    var Message = "Excellent work!";
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
    var Message = "Please try harder!";
    break;
  default:
    var Message = "점수 오류입니다. 다시 입력 해주세요";
    break;
}

// 합격 여부
let pass = lastScore < 60;
let passMessage = pass ? "Fail" : "Pass";

// 등급 출력
console.log("\n\n\n\n", "Final Score:", lastScore);
console.log(` Grade: ${grade}`);
console.log(` Status: ${passMessage}`);
console.log(` Message : ${Message}`);
