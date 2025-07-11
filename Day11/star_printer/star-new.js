const STAR = "*";
const DASH = "-";
const PATTERNS = [2, 3, 4, 1, 9, 4, 5];

const getPromptInput = () => {
  while (true) {
    const inputStr = prompt("출력할 별 갯수를 입력하세요 (1-10):");
    const inputNum = Number(inputStr);

    if (isNaN(inputNum)) {
      console.log(
        `[입력: ${inputStr}] Invalid input! This is not number. Please enter number.`
      );
      continue;
    }
    if (inputNum < 1 || inputNum > 10) {
      console.log(
        `[입력: ${inputStr}] Invalid input! Enter a number between 1 and 10.`
      );
      continue;
    }
    return inputNum;
  }
};

const getSigns = (count, sign) => sign.repeat(count);

const getStars = (count) => getSigns(count, STAR);
const getDashes = (count) => getSigns(count, DASH);

const printResult = (input, stars) => console.log(`[입력: ${input}] ${stars}`);

const printNormalStars = (input) => {
  printResult(input, getStars(input));
};

const printReverseStars = (input) => {
  console.log("[역순 별찍기]");
  for (let i = input; i > 0; i--) {
    console.log(getStars(i));
  }
};

const printSquare = (input) => {
  console.log("[정사각형 별찍기]");
  for (let i = 0; i < input; i++) {
    console.log(getStars(input));
  }
};

const printPatterns = () => {
  console.log("[패턴 별찍기]");
  console.log("저장된 패턴 :", PATTERNS.join(", "));
  PATTERNS.forEach((num, idx) => {
    console.log(`패턴값 ${num}: ${getStars(num)}`);
  });
};

const printMultipleStars = (...counts) => {
  console.log("[여러 숫자 별찍기]");
  counts.forEach((num) => {
    if (typeof num !== "number" || num < 1) {
      console.log(`Stars for count ${num}: Invalid count`);
    } else {
      console.log(`Stars for count ${num}: ${getStars(num)}`);
    }
  });
};

console.log("Enter the number of stars (1-10):");
const input = getPromptInput();

printNormalStars(input);
printReverseStars(input);
printSquare(input);
printPatterns();
printMultipleStars(4, 3, 2, 4, 4, 5, 3, 3, 3, 5, 3, 4, 2, 7, 5, 4);
