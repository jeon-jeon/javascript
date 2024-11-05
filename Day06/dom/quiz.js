// #55efc4 #74b9ff #fab1a0 #a29bfe #81ecec #ffeaa7 #d63031 #fd79a8
const kimbabList = [
  { name: "김밥", color: "#55efc4" },
  { name: "참치김밥", color: "#74b9ff" },
  { name: "멸추김밥", color: "#fab1a0" },
  { name: "소고기김밥", color: "#a29bfe" },
  { name: "돈까스김밥", color: "#81ecec" },
  { name: "제육김밥", color: "#ffeaa7" },
  { name: "오뎅김밥", color: "#d63031" },
  { name: "치즈김밥", color: "#fd79a8" },
];

const makeBtn = (name, color) => {
  const newBtn = document.createElement("button");
  newBtn.innerHTML = name;
  newBtn.style.backgroundColor = color;
  document.body.appendChild(newBtn);
};

kimbabList.forEach((x) => makeBtn(x.name, x.color));
