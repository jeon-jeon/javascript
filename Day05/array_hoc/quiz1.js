const fruits = ["orange", "strawberry", "melon", "peach", "pineapple"];

const length = (x) => x.length;
const a1 = fruits.map(length);
console.log(a1);

const upper = (x) => x.toUpperCase();
const a2 = fruits.map(upper);
console.log(a2);

const change = (x) => (x.length <= 5 ? "🍎" : "🍋");
const a3 = fruits.map(change);
console.log(a3);
