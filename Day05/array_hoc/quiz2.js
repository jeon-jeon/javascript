const list = [
  { name: "hot americano", price: 2000, shot: 2 },
  { name: "ice americano", price: 2500, shot: 2 },
  { name: "hot latte", price: 3000, shot: 2 },
  { name: "ice latte", price: 3500, shot: 2 },
  { name: "ice mocha", price: 3500, shot: 2 },
];

// const upper = (x) => {
//   x.name = x.name.toUpperCase();
//   return x;
// };
// const a = list.map(upper);
// console.log(a);

// const inflation = (x) => {
//   x.price = x.price * 1.1;
//   return x;
// };
// const b = list.map(inflation);
// console.log(b);

const addShot = (x) => {
  x.shot = x.shot + 2;
  return x;
};
const c = list.map(addShot);
console.log(c);

const yenPrice = (x) => {
  x.yenPrice = x.price * 0.11;
  return x;
};

const d = list.map(yenPrice);
console.log(d);
