// taco 만들기 프로그램
// 메뉴추가 버튼 누르면 -> prompt(메뉴입력)후 새로운 버튼 추가됨
// 🦐(2$) 🍗(3$) 🍳(1$) 🧀(1$) 🥩(1$)
// 타코의 총 가격이 올라갑니다
// 구매하기 누르면 총 가격:~~ [눌렀던 이모지] 타코 완성되었습니다
// 구매 후 리셋됨

const addmenu = document.createElement("button");
addmenu.innerText = "메뉴추가";
addmenu.addEventListener("click", () => {
  const newBtn = document.createElement("button");
  newBtn.innerHTML = prompt("메뉴입력");
  document.body.appendChild(newBtn);
});
document.body.appendChild(addmenu);

// let total = 0;

// const menuList = [
//   { ingredient: "shrimp", price: 2 },
//   { ingredient: "chicken", price: 3 },
//   { ingredient: "egg", price: 1 },
//   { ingredient: "cheese", price: 1 },
//   { ingredient: "beef", price: 1 },
// ];

// const makeBtn = (ingredient, price) => {
//   const button = document.createElement("button");
//   button.innerText = ingredient;

//   button.addEventListener("click", () => {
//     total += price;
//     console.log(total);
//   });

//   document.body.appendChild(button);
// };

// menuList.forEach((x) => makeBtn(x.ingredient, x.price));
