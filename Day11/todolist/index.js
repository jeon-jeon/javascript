const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todayList = document.getElementById("todayList");
const list = [];
// input.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.code == "Enter") {
//     list.push(input.value);
//     todayList.innerHTML = list.map((v) => `<li>${v}</li>`).join(" ");
//     input.value = "";
//   }
// });

btn.addEventListener("click", () => {
  list.push(input.value);
  todayList.innerHTML = list.map((v) => `<li>${v}</li>`).join(" ");
  input.value = "";
});
