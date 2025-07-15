//입력, 이벤트, 출력 설정
const inputEL = document.getElementById("timerInput");
const buttonEL = document.getElementById("startTimer");
const displayEL = document.getElementById("timerDisplay");

//버튼 이벤트리스너 추가
buttonEL.addEventListener("click", () => {
  let value = Number(inputEL.value);

  //유효성검사
  if (isNaN(value) || value < 1 || value > 10) {
    displayEL.textContent = "유효한 숫자(1-10)을 입력하세요.";
    displayEL.classList.add("error");
    return;
  }

  //가보자고
  startTimer(value);
});

//가보자고의 함수정의
function startTimer(seconds = 10) {
  let timerCount = seconds;
  var message = "타이머 종료";
  const timerId = setInterval(() => {
    if (timerCount > 0) {
      displayEL.textContent = `타이머 : ${timerCount}초`;
      timerCount--;
      buttonEL.disabled = true;
    } else {
      clearInterval(timerId);
      displayEL.textContent = message;
      buttonEL.disabled = false;
    }
  }, 1000);
}
