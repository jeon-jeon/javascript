const num = Number(prompt("숫자 입력"));

if (num % 2) {
  console.log("홀수");
} else {
  console.log("짝수");
}

const point = Number(prompt("js 시험점수"));

if (point >= 90) {
  console.log("A");
} else if (point >= 80) {
  console.log("B");
} else if (point >= 70) {
  console.log("C");
} else if (point >= 60) {
  console.log("D");
} else {
  console.log("탈락");
}

const num2 = Number(prompt("숫자 입력"));

if (num2 > 0) {
  if (num2 % 2) {
    console.log("양의 홀수");
  } else {
    console.log("양의 짝수");
  }
} else if (num2 < 0) {
  if (num2 % 2) {
    console.log("음의 홀수");
  } else {
    console.log("음의 짝수");
  }
} else {
  console.log("0");
}

const positive = num2 > 0;
const negative = num2 < 0;
const odd = num2 % 2;
const even = num2 % 2 == 0;

if (positive && odd) {
  console.log("양의 홀수");
} else if (positive && even) {
  console.log("양의 짝수");
} else if (negative && odd) {
  console.log("음의 홀수");
} else if (negative && even) {
  console.log("음의 짝수");
} else {
  console.log("0");
}
