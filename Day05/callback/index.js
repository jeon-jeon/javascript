// const cook = (recipe) => {
//   console.log("요리 준비!");
//   recipe();
//   console.log("요리 완성!🍳");
// };

// const ramen = () => {
//   console.log("물 끓이기");
//   console.log("스프 넣기");
//   console.log("라면 넣기");
// };

// const chapagetti = () => {
//   console.log("물 끓이기");
//   console.log("면 넣기");
//   console.log("물 버리기");
//   console.log("스프 넣고 비비기");
// };

// cook(ramen);
// cook(chapagetti);

// 🧙⚡🧊🔥
const skill = (magic) => {
  console.log("마법사 스킬 준비🧙");
  magic();
  console.log("마법사 스킬 완료!");
};

// const attackSkill = (property) => {
//   console.log(`${property} 스킬 발동!`);
// };

const thunder = () => {
  console.log("⚡스킬 발동!");
};

const fire = () => {
  console.log("🔥스킬 발동!");
};

const ice = () => {
  console.log("🧊스킬 발동!");
};

skill(thunder);
skill(fire);
skill(ice);

// 🦐 🍗 🍳 🧀 🥩
const makeTaco = (ingredient) => {
  console.log("🌮타코 만들기!");
  ingredient();
  console.log("🌮타코 완성!");
};

const shrimp = () => {
  console.log("🦐 재료 추가!");
};

const chicken = () => {
  console.log("🍗 재료 추가!");
};
const cheese = () => {
  console.log("🧀 재료 추가!");
};

const egg = () => {
  console.log("🍳 재료 추가!");
};

const beef = () => {
  console.log("🥩 재료 추가!");
};

const menu = Number(
  prompt("타코 메뉴 선택!(1.새우, 2.치킨, 3.치즈, 4.계란후라이, 5.소고기")
);

if (menu == 1) {
  makeTaco(shrimp);
} else if (menu == 2) {
  makeTaco(chicken);
} else if (menu == 3) {
  makeTaco(cheese);
} else if (menu == 4) {
  makeTaco(egg);
} else if (menu == 5) {
  makeTaco(beef);
} else {
  console.log("메뉴 없음");
}
