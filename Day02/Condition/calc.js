const num1 = Number(prompt("첫 번째 숫자"));
const num2 = Number(prompt("두 번째 숫자"));
const operator = prompt("연산자 입력(+, -, *, /, **)");

const result1 = num1 + num2;
const result2 = num1 - num2;
const result3 = num1 * num2;
const result4 = num1 / num2;
const result5 = num1 ** num2;

if (operator == "+") {
  console.log(result1);
} else if (operator == "-") {
  console.log(result2);
} else if (operator == "*") {
  console.log(result3);
} else if (operator == "/") {
  if (num2 == 0) {
    console.log("해당 숫자로 나눌 수 없습니다.");
  } else {
    console.log(result4);
  }
} else if (operator == "**") {
  console.log(result5);
} else {
  console.log("그런 연산자 없음");
}
