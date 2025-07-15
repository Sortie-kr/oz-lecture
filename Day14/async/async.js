async function fetchData() {
  try {
    let promise = new Promise((resolve) =>
      setTimeout(() => resolve("데이터 가져옴!"), 1000)
    );
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

async function getUser() {
  try {
    // const response = await fetch("https://api.example.com");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("사용자 정보를 불러올 수 없습니다", error);
  }
}

async function getUser() {
  try {
    const reponse = await fetch("https://api.example.com");
    const user = await response.json;
    console.log(user);
  } catch (error) {
    console.log("사용자 정보를 불러올 수 없습니다", error);
  }
}
