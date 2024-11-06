// 모양 바꾸기 프로그램
// 박스 => w:100 h:100 bgcolor:white
// 사이즈 크게
// 사이즈 작게
// 배경색 빨강
// 배경색 파랑
// 테두리 둥글게
// 테두리 직각
const box = document.createElement("div");
box.classList.add("box");
document.body.appendChild(box);

const button = [
  {
    text: "사이즈크게",
    change: () => {
      box.style.width = "200px";
      box.style.height = "200px";
    },
  },
  {
    text: "사이즈작게",
    change: () => {
      box.style.width = "50px";
      box.style.height = "50px";
    },
  },
  {
    text: "배경빨강",
    change: () => {
      box.style.backgroundColor = "red";
    },
  },
  {
    text: "배경파랑",
    change: () => {
      box.style.backgroundColor = "blue";
    },
  },
  {
    text: "둥글둥글",
    change: () => {
      box.style.borderRadius = "9999px";
    },
  },
  {
    text: "네모네모",
    change: () => {
      box.style.borderRadius = "0px";
    },
  },
  {
    text: "원래대로",
    change: () => {
      box.style.width = "100px";
      box.style.height = "100px";
      box.style.backgroundColor = "white";
      box.style.borderRadius = "0px";
    },
  },
];

button.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.text;
  btn.addEventListener("click", x.change);
  document.body.append(btn);
});
