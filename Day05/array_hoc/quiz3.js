// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = (x) => x % 2 == 0;
// const result1 = list.filter(even);
// console.log(result1);

// const overFive = (x) => x >= 5;
// const result2 = list.filter(overFive);
// console.log(result2);

// const double = (x) => x ** 2;
// const underFifty = (x) => x <= 50;
// const result3 = list.map(double).filter(underFifty);
// console.log(result3);

const fruits = ["apple", "banana", "kiwi", "melon", "watermelon", "grape"];

const length = (x) => x.length > 5;
const result4 = fruits.filter(length);
console.log(result4);

const hasI = (x) => x.includes("i");
const result5 = fruits.filter(hasI);
console.log(result5);

const hasMelon = (x) => x.includes("melon");
const result6 = fruits.filter(hasMelon);
console.log(result6);

const test = fruits.filter((x) => ["i", "melon"].some((y) => x.includes(y)));
console.log(test);
