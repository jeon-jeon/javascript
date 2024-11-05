const sentence = prompt("영문장 입력");
const result = sentence
  .split(" ")
  .map((x) => x.length)
  .reduce((x, y) => x + y);
console.log(result);
