const list = [3, 10, 23, 77, 99];

const result1 = list.filter((x) => x <= 50);
console.log(result1);

const result2 = list.map((x) => x ** 2 + 10);
console.log(result2);

const result3 = list.filter((x) => String(x)[0] == String(x)[1]);
console.log(result3);
