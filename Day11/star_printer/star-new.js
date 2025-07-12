// 상수 선언
// const STAR = "*";
// const DASH = "-";
// const PATTERNS = [2, 3, 4, 1, 9, 4, 5];

const STAR = "*";
const DASH = "-";
const PATTERNS = [2, 3, 4, 1, 9, 4, 5];

// 별, 대시를 원하는 수만큼 출력하는 공통 함수
// const getSigns = (count, sign) => sign.repeat(count);
// const getStars = (count) => getSigns(count, STAR);
// const getDashes = (count) => getSigns(count, DASH);

const getSigns = (count, sign) => sign.repeat(count);
const getsStars = (count) => getSigns(count, STAR);
const getDashes = (count) => getSigns(count, DASH);

// 사용자 입력 받는 함수
const getPromptInput = () => {
  while (true) {
    const inputStr = prompt("출력할 별 갯수를 입력하세요 (1~10):");
    const inputNum = Number(inputStr);

    if (isNaN(inputNum)) {
      console.log(`[입력: ${inputStr}] Invalid input! This is not a number.`);
      continue;
    }

    if (inputNum >= 1 && inputNum <= 10) {
      return inputNum;
    }

    console.log(
      `[입력: ${inputStr}] Invalid input! Enter a number between 1 and 10.`
    );
  }
};

// 별 출력 결과 출력
const printResult = (label, value) => {
  console.log(`${label}: ${value}`);
};

// ⭐ 기본 과제: 한 줄 별 출력
const printNormalStars = (input) => {
  console.log("[기본 별찍기]");
  printResult("입력", ${getStars(input)});
};

// ⭐ 역순 별 출력
const printReverseStars = (input) => {
  console.log("[역순 별찍기]");
  for (let i = input; i > 0; i--) {
    console.log(getStars(i));
  }
};

// ⭐ 정사각형 별 출력
const printSquare = (input) => {
  console.log("[정사각형 별찍기]");
  const line = getStars(input);
  const dash = getDashes(input);
  for (let i = 0; i < input; i++) {
    console.log(line);
    if (i < input - 1) console.log(dash); // 마지막 줄에는 대시 생략
  }
};

// ⭐ 저장된 패턴 출력
const printPatterns = () => {
  console.log("[패턴 별찍기]");
  console.log("저장된 패턴 :", PATTERNS.join(", "));
  for (const num of PATTERNS) {
    printResult(`패턴값 ${num}`, getStars(num));
  }
};

// ⭐ ...rest를 사용한 여러 별 출력
const printMultipleStars = (...counts) => {
  console.log("[여러 숫자 별찍기]");
  for (const count of counts) {
    const label = `Stars for count ${count}`;
    const output = count >= 1 ? getStars(count) : "Invalid count";
    printResult(label, output);
  }
};

// ✅ 실행 흐름
console.log("Enter the number of stars (1-10):");
const input = getPromptInput();

printNormalStars(input);
printReverseStars(input);
printSquare(input);
printPatterns();
printMultipleStars(4, 3, 2, 4, 4, 5, 3, 3, 3, 5, 3, 4, 2, 7, 5, 4);
