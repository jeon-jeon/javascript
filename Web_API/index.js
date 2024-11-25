// localStorage.setItem("nation", "일본");
// localStorage.getItem("nation"); // 일본

// coffee.innerText = localStorage.getItem("coffee");

const input = document.getElementById("input");
const save = document.getElementById("save");
const remove = document.getElementById("remove");
const foodList = document.getElementById("foodList");

// 데이터 가져와서 초기 세팅하기!
const data = localStorage.getItem("data");
const saveList = data ? data.split(",") : [];
foodList.innerHTML = `${saveList.map((v) => `<li>${v}</li>`).join(" ")}`;

// 저장 버튼 실행
save.addEventListener("click", (e) => {
  saveList.push(input.value);
  foodList.innerHTML = `${saveList.map((v) => `<li>${v}</li>`).join(" ")}`;
  localStorage.setItem("data", saveList);
});
