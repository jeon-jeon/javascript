// 함수특) 입력&출력
// function fly(x) {
//   console.log("비행기 이륙");
//   console.log(`${x}로 출발!`);
// }

// function add(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function multi(a, b) {
//   return a * b;
// }

// function square(a, b) {
//   return a ** b;
// }

// 화살표 함수
// ()=>{}
// const add = (a, b) => {
//   return a + b;
// };

// const minus = (a, b) => {
//   return a - b;
// };

// const multi = (a, b) => {
//   return a * b;
// };

// const square = (a, b) => {
//   return a ** b;
// };

// const morning = {
//   main: "밥",
//   sub: "계란",
//   cook: () => {
//     console.log("요리중!");
//   },
// };

// morning.cook();

// 함수가 일급 객체라서 가능
const calc = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a, b) => a ** b,
};

const num1 = Number(prompt("첫 번째 숫자"));
const num2 = Number(prompt("두 번째 숫자"));
const operator = prompt("연산자 입력");

alert(`${calc[operator](num1, num2)}`);

// if (operator == "+") {
//   console.log(calc.add(num1, num2));
// } else if (operator == "-") {
//   console.log(calc.substract(num1, num2));
// } else if (operator == "*") {
//   console.log(calc.multiply(num1, num2));
// } else if (operator == "/") {
//   console.log(calc.divide(num1, num2));
// } else if (operator == "**") {
//   console.log(calc.square(num1, num2));
// } else {
//   console.log("Nope");
// }
