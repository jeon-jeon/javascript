const list = [1, 3, 5, 7, 9];
console.log(list);

const triple = (x) => x * 3;
const a = list.map(triple);
console.log(a);

const plusHundred = (x) => x + 100;
const b = list.map(plusHundred);
console.log(b);

const doubleOrTriple = (x) => (x > 6 ? x * 2 : x * 3);
const c = list.map(doubleOrTriple);
console.log(c);

const isThree = (x) => (x % 3 != 0 ? x + 10 : x * 2);
const d = list.map(isThree);
console.log(d);

const list1 = [10, 20, 30, 40, 50];
console.log(list1);

const underThirty = (x) => (x < 30 ? x * 2 : x);
const e = list1.map(underThirty);
console.log(e);

const isThirty = (x) => (x == 30 ? "🍔" : "🍕");
const f = list1.map(isThirty);
console.log(f);
