const fruits = ["apple", "banana", "kiwi", "pineapple", "mango"];

const result = fruits.filter((x) => ["k", "p", "m"].some((y) => x.includes(y)));
console.log(result);

const result2 = fruits.filter((x) => ["a", "e"].every((y) => x.includes(y)));
console.log(result2);

const test = (x) => ["b", "o"].some((y) => x.includes(y));
const testResult = fruits.filter(test);
console.log(testResult);
