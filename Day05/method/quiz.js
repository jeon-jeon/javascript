// const coffee = prompt("좋아하는 커피는 무엇입니까?");
// console.log(coffee.toUpperCase());

// const sentence = prompt("영어 한 문장 입력해줘");
// const count = Number(prompt("몇 번 반복할까?"));
// console.log(sentence.repeat(count));

const password = prompt("비밀번호 설정");
const isStartsWithIT = password.startsWith("IT");
const hasSpecialChar =
  password.includes("#") || password.includes("@") || password.includes("!");
const isLowerThan4 = password.length < 4;
const isOverThan12 = password.length > 12;

if (!isStartsWithIT) {
  console.log("비밀번호가 IT로 시작하지 않습니다.");
} else if (!hasSpecialChar) {
  console.log("비밀번호에 특수문자가 없습니다.");
} else if (isLowerThan4 || isOverThan12) {
  console.log("비밀번호의 길이가 짧거나 깁니다.");
} else {
  console.log("비밀번호 설정 잘했음");
}
