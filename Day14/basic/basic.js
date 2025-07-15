// setTimeout(() => {
//     console.log("이미지 로딩");
// })

// 콜백함수

// function sayHello(name, callback){ //name은 문자열, callback은 나중에 실행될 함수
//     console.log(`안녕, ${name}`)
//     setTimeout(()=> {
//         callback(); // 햄버거(전체코드 작동) 다되면 전화(callback)드릴게요~
//     }, 2000)
// }

// console.log("1.주문완료");

// setTimeout(function () {
//     console.log("2.음식 도착");
// }, 3000) << 3초 뒤에 실행

// console.log("3.기다리는중");

// function greet(name, callback)  {
//     console.log(`안녕,${name}`);
//     callback();
// }

// function sayBye(){
//     console.log
// }
// ///callback방식

// function download(callback)
// {
//     setTimeout(
//     () => {
//         console.log("다운로드 완료");
//     callback();
//     }, 1000)
// }

// function download() {
//     return new Promise((resolve)=>{setTimeout(() => {
//         console.log("다운로드 완료");resolve();},1000)
//     })
// }

// async function start() {
//     console.log("시작");
//     await download();
// console.log("처리 완료");
// }
// start();
