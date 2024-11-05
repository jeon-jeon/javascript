const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(5, 1fr)";
container.style.width = "100vw";
container.style.justifyContent = "spaceEvenly";

const colorList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

colorList.forEach((x) => {
  const colorBox = document.createElement("div");
  colorBox.style.backgroundColor = x;
  colorBox.style.width = "100%";
  colorBox.style.height = "200px";
  container.appendChild(colorBox);
});
document.body.appendChild(container);
