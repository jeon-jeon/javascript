// const button = document.createElement("button");
// button.innerHTML = "오렌지";
// // button.className = "bold orange button"
// button.classList.add("bold");
// button.classList.add("orange");
// button.classList.add("button");
// // button.classList.toggle("bold")

// document.body.appendChild(button);

// const btn = document.createElement("button");
// btn.innerHTML = prompt("버튼 내용");
// btn.classList.add("button");
// btn.classList.add(prompt("버튼 색상 [orange, green, pink]"));
// btn.classList.add(prompt("글씨 두께 [light, bold, bolder]"));
// document.body.appendChild(btn);

btnList = ["처음", "1", "2", "3", "4", "다음", "마지막"];

btnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.classList.add("pageBtn");
  document.body.appendChild(btn);
});
