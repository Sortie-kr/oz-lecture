// 과제:j
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 우선순위 추가
const prioritySelect = document.getElementById("priority");

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  //우선순위 조건문
  if (priority === "high") {
    span.style.color = "red";
  }

  // 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-btn";

  // 삭제 버튼 이벤트 리스너
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
    updateTaskCount();
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  //입력창 초기화
  taskInput.value = "";
  updateTaskCount();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);
// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
    updateTaskCount();
  }
});

//갯수 업데이트 추가
function updateTaskCount() {
  const totalCount = taskList.children.length;
  const completedCount = taskList.querySelectorAll(".completed").length;

  //완료된 일을 클릭하면 taskList에서 삭제해서 해야할 일 숫자 업데이트
  const taskCountDiv = document.getElementById("taskCount");
  taskCountDiv.textContent = `현재 할 일: ${totalCount - completedCount}개`;
}
