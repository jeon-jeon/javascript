// const num1 = prompt("첫번째 숫자?");
// const num2 = prompt("두번째 숫자?");

// // const numA = Number(num1);
// // const numB = Number(num2);

// alert(Number(num1) + Number(num2));

const age = prompt("몇살임?");
const year = 2024 - Number(age);
alert(`${year}년생!`);

const krw = prompt("원화 입력하면 엔화 알려줄게");
const jpy = Number(krw) * 0.11;
alert(`${krw}원이면 ${jpy}엔임`);

const btc = prompt("비트코인 입력하면 원화로 알려줄게");
const krw2 = Number(btc) * 99929420.81;
alert(`${krw2}원~`);
