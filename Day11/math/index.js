// const btn = document.getElementById("btn");
// const num = document.getElementById("num");

// btn.addEventListener("click", () => {
//   num.innerText = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
// });

// // 🍕🍔🍟🌭🍿🧇🥞🥪
// const list = ["🍕", "🍔", "🍟", "🌭", "🍿", "🧇", "🥞", "🥪"];
// const btn2 = document.getElementById("btn2");
// const random = document.getElementById("random");
// btn2.addEventListener("click", () => {
//   random.innerText = list[Math.floor(Math.random() * (list.length - 1))];
// });

const list = document.getElementById("list");
const inputName = document.getElementById("inputName");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const name = document.getElementById("name");

const nameList = [];

btn1.addEventListener("click", () => {
  nameList.push(inputName.value);
  list.innerHTML = nameList.map((v) => `<span>${v}</span>`).join(" ");
});

btn2.addEventListener("click", () => {
  name.innerText = nameList[Math.floor(Math.random() * nameList.length)];
});
