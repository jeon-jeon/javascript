const button = document.createElement("button");
button.innerText = "요거트";

const hello = () => {
  console.log("요거트 안녕!");
};

button.addEventListener("click", hello);

document.body.appendChild(button);

// ⚡🧊🔥
const btnList = ["⚡", "🧊", "🔥"];
const makeBtn = (x) => {
  const skillBtn = document.createElement("button");
  skillBtn.innerText = x;
  skillBtn.addEventListener("click", () => {
    alert(`${x} 발동`);
  });
  document.body.appendChild(skillBtn);
};

btnList.forEach((x) => makeBtn(x));
