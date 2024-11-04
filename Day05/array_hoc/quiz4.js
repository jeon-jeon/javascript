const menu = [
  { name: "cookie", price: 3000, kcal: 400 },
  { name: "doughnut", price: 3500, kcal: 500 },
  { name: "yogurt", price: 2000, kcal: 200 },
  { name: "chocolate", price: 2500, kcal: 500 },
];

console.log(menu);

const underPrice = (x) => x.price <= 3000;
const result1 = menu.filter(underPrice);
console.log(result1);

const underKcal = (x) => x.kcal <= 300;
const result2 = menu.filter(underKcal);
console.log(result2);
