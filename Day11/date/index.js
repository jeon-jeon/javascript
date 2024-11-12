const date = new Date();
const hours = Number(date.getHours());
const time = document.getElementById("time");
console.log(hours);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  time.innerText = hours - 8;
});
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  time.innerText = hours - 8;
});
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  time.innerText = hours - 1;
});
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  time.innerText = hours - 8;
});
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
  time.innerText = hours - 14;
});
