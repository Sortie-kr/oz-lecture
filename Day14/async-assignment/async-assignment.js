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

//가보자고의 함수정의 아무값 안주면 10초부터 시작
function startTimer(seconds = 10) {
  let timerCount = seconds;
  var message = "타이머 종료";

  //   타이머 시작/ 끝났을 때 출력할 것?
  const timerId = setInterval(() => {
    if (timerCount > 0) {
      displayEL.textContent = `타이머 : ${timerCount}초`;
      //1초 뒤에 1씩 줄어드는 타이머
      timerCount--;
      //   버튼 비활성화
      buttonEL.disabled = true;
    } else {
      //시간 다되면 메세지 출력
      clearInterval(timerId);
      displayEL.textContent = message;
      //버튼 살리기
      buttonEL.disabled = false;
    }
  }, 1000);
}
