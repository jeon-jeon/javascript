const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gap = "20px";
container.style.width = "400px";

const makeBtn = (bgColor, color, padding) => {
  const btn = document.createElement("button");
  btn.innerHTML = "Button";
  btn.style.backgroundColor = bgColor;
  btn.style.color = color;
  btn.style.width = "fit-content";
  btn.style.borderRadius = "30px";
  btn.style.border = `1px solid ${color}`;
  btn.style.padding = padding;
  return btn;
};

const paddingList = ["10px", "10px 30px", "10px 60px"];

const list = [
  //   { bgColor: "#3498db", color: "white", padding: "10px" },
  //   { bgColor: "#3498db", color: "white", padding: "10px 30px" },
  //   { bgColor: "#3498db", color: "white", padding: "10px 60px" },

  //   { bgColor: "#2980b9", color: "white", padding: "10px" },
  //   { bgColor: "#2980b9", color: "white", padding: "10px 30px" },
  //   { bgColor: "#2980b9", color: "white", padding: "10px 60px" },

  //   { bgColor: "white", color: "#3498db", padding: "10px" },
  //   { bgColor: "white", color: "#3498db", padding: "10px 30px" },
  //   { bgColor: "white", color: "#3498db", padding: "10px 60px" },

  //   { bgColor: "#bdc3c7", color: "white", padding: "10px" },
  //   { bgColor: "#bdc3c7", color: "white", padding: "10px 30px" },
  //   { bgColor: "#bdc3c7", color: "white", padding: "10px 60px" },
  {
    bgColor: "#3498db",
    color: "white",
    padding: paddingList,
  },
  {
    bgColor: "#2980b9",
    color: "white",
    padding: paddingList,
  },
  {
    bgColor: "white",
    color: "#3498db",
    padding: paddingList,
  },
  {
    bgColor: "#bdc3c7",
    color: "white",
    padding: paddingList,
  },
];

list.forEach((x) =>
  x.padding.forEach((y) =>
    container.appendChild(makeBtn(x.bgColor, x.color, y))
  )
);

document.body.appendChild(container);
