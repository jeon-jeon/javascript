// const lunch = {
//   name: "비빔밥",
//   price: 7000,
//   kcal: 700,
//   restaurant: {
//     1: "싸다김밥",
//     2: "전주비빔밥",
//     3: "본죽&비빔밥",
//   },
// };

// console.log(lunch);

// const dessert = new Object();
// dessert.name = prompt("디저트 뭐 드실?");
// dessert.price = Number(prompt("얼마임?"));
// dessert.kcal = Number(prompt("몇 칼로리"));

// console.log(dessert);

const year = Number(prompt("태어난 년도"));

const animals = {
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",

  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
  0: "개",
  1: "돼지",
  2: "원숭이",
  3: "닭",
};

alert(`${animals[year % 12]}`);
