// 햄버거
const burger = document.getElementById("burger");

blist = ["burger1", "burger2", "burger3", "burger4", "burger5"];
blist.forEach((x) => {
  const btn = document.getElementById(x);
  btn.addEventListener("click", () => {
    burger.innerText = btn.innerText;
  });
});

// 사이드
const side = document.getElementById("side");

slist = ["side1", "side2", "side3", "side4"];
slist.forEach((x) => {
  const btn = document.getElementById(x);
  btn.addEventListener("click", () => {
    side.innerText = btn.innerText;
  });
});

// 음료
const drink = document.getElementById("drink");

dlist = ["drink1", "drink2", "drink3", "drink4"];
dlist.forEach((x) => {
  const btn = document.getElementById(x);
  btn.addEventListener("click", () => {
    drink.innerText = btn.innerText;
  });
});

// 구매하기
const buyBtn = document.getElementById("buy");
buyBtn.addEventListener("click", () => {
  alert(
    `${burger.innerText}버거, 사이드 ${side.innerText}, 음료 ${drink.innerText} 구매완료!`
  );
});
