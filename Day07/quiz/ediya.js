const list = [
  {
    src: "https://ediya.com/files/menu/IMG_1730076235563.png",
    name: "(L) HOT 시그니처 라떼",
  },
  {
    src: "https://ediya.com/files/menu/IMG_1730076367601.png",
    name: "(EX) HOT 시그니처 라떼",
  },
  {
    src: "https://ediya.com/files/menu/IMG_1730076504756.png",
    name: "(L) ICE 시그니처 라떼",
  },
];

const container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "30px";
document.body.appendChild(container);

const coffeeBox = (imgSrc, coffeeName) => {
  const box = document.createElement("div");
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.alignItems = "center";
  box.style.gap = "10px";

  const coffee = document.createElement("img");
  coffee.src = imgSrc;
  coffee.style.width = "300px";
  coffee.style.height = "300px";
  coffee.style.objectFit = "cover";
  box.appendChild(coffee);

  const name = document.createElement("span");
  name.innerText = coffeeName;
  box.appendChild(name);

  return box;
};

list.forEach((x) => container.appendChild(coffeeBox(x.src, x.name)));
