// 타코 만들기
// 1. 🦐2$ 🍗2$ 🍳1$ 🧀1$ 🥩1$ 버튼만들기
// 2. 총가격 : 0$ 가격표시가 화면에 있음
// 3. 구매하기 버튼
// 위 재료들을 클릭하면 총가격이 올라가고 구매하기 버튼을 누르면 총금액은 ~이고, 구매하신 타코재료는 클릭한 재료 알럿으로 나오기

const total = document.createElement("span");
total.innerText = "0";

const menuList = [
  { name: "🦐2$", price: 2, icon: "🦐" },
  { name: "🍗2$", price: 2, icon: "🍗" },
  { name: "🍳1$", price: 1, icon: "🍳" },
  { name: "🧀1$", price: 1, icon: "🧀" },
  { name: "🥩1$", price: 1, icon: "🥩" },
];

const buyMenu = [];

menuList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    total.innerText = Number(total.innerText) + x.price;
    buyMenu.push(x.icon);
  });
  document.body.appendChild(btn);
});

document.body.appendChild(total);

const buyBtn = document.createElement("button");
buyBtn.innerText = "구매하기";
buyBtn.addEventListener("click", () => {
  alert(`총 금액:${total.innerText}, 메뉴:${buyMenu}`);
});
document.body.appendChild(buyBtn);
