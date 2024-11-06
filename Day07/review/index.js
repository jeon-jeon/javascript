const buttonBox = document.createElement("div");
buttonBox.style.display = "flex";
buttonBox.style.flexDirection = "column";
buttonBox.style.gap = "10px";
buttonBox.style.width = "fit-content";

const btnList = ["Dashboard", "Order", "Analytics", "Customer", "Menu"];

const makeBtn = (text) => {
  const btn = document.createElement("button");
  btn.innerHTML = text;
  btn.style.color = "#ffffff";
  btn.style.fontWeight = "600";
  btn.style.backgroundColor = "#6c5dd3";
  btn.style.border = "solid 1px #6c5dd3";
  btn.style.borderRadius = "12px";
  btn.style.padding = "15px 20px";

  return btn;
};

btnList.forEach((x) => buttonBox.appendChild(makeBtn(x)));

document.body.appendChild(buttonBox);
