const input = "not-a-number";

try {
  const number = Number(input);
  if (isNaN(number)) console.log("NaN");
  console.log("입력값:", number);
  throw new Error("숫자를 입력하세요.");
} catch (error) {
  console.log(error);
  alert(error.message);
}
