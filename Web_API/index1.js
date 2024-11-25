// 시간 컨트롤(=타이머)

// 특정 시간 후에 함수 실행
// setTimeout(() => {
//   console.log("마라탕 & 떡볶이💛");
// }, 3000); // 3초

// setTimeout(() => {
//   console.log("매운탕 & 햄버거💚");
// }, 2000);

const btn = document.getElementById("btn");
const count = document.getElementById("count");

const countdown = setInterval(() => {
  count.innerText = Number(count.innerText) - 1;
}, 1000);
setTimeout(() => {
  clearInterval(countdown);
}, 5000);

// btn.addEventListener("click", (e) => {
//   setTimeout(() => {
//     count.innerText = Number(count.innerText) - 1;
//   }, 1000);
//   setTimeout(() => {
//     count.innerText = Number(count.innerText) - 1;
//   }, 2000);
//   setTimeout(() => {
//     count.innerText = Number(count.innerText) - 1;
//   }, 3000);
//   setTimeout(() => {
//     count.innerText = Number(count.innerText) - 1;
//   }, 4000);
//   setTimeout(() => {
//     count.innerText = Number(count.innerText) - 1;
//   }, 5000);
//   setTimeout(() => {
//     alert("🚀🚀🚀🚀🚀🚀");
//   }, 6000);
// });
