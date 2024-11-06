const container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "15px";
document.body.appendChild(container);

const makeBox = () => {
  const box = document.createElement("div");
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.alignItems = "center";
  box.style.gap = "5px";
  container.appendChild(box);
  return box;
};

const imgList = [
  {
    src: "https://pixabay.com/get/gde95e7e25ebd964c69b60d3d8856a25cc829ff30093dfb55c562a55fc6439ef1ceee7ad6568546f381020f0bf7b270cf_640.jpg",
    name: "your story",
  },
  {
    src: "https://pixabay.com/get/gde91d19ca77533278164c095b6d91e1c43dcad1079106fa3a85cd706aef54171937df20f712a5f6c5500273d79e704fd_640.jpg",
    name: "kerennne",
  },
  {
    src: "https://pixabay.com/get/g1b942daddfa07d1012f90c63f430a0827b7e93f7436065ac019637e51e56ec42895a49fd7e97fc601338bfb14a8a1435_640.jpg",
    name: "zackjohn",
  },
  {
    src: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "kieron_d",
  },
];

const makeCircleImg = (imgSrc) => {
  const circle = document.createElement("img");
  circle.src = imgSrc;
  circle.style.width = "70px";
  circle.style.height = "70px";
  circle.style.objectFit = "cover";
  circle.style.borderRadius = "9999px";

  return circle;
};

const makeName = (x) => {
  const name = document.createElement("span");
  name.innerHTML = x;
  name.style.fontSize = "13px";
  return name;
};

imgList.forEach((x) => {
  const box = makeBox();
  box.appendChild(makeCircleImg(x.src));
  box.appendChild(makeName(x.name));
});
