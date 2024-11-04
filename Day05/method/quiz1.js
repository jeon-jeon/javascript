const email = prompt("이메일주소 입력");

const emailID = email.split("@")[0];
const domain = email.split("@")[1];

const hasDomain =
  domain.includes("naver") ||
  domain.includes("gmail") ||
  domain.includes("daum");

// const isLowerThan4 = emailID.length < 4;
// const isOverThan16 = emailID.length > 16;
const isLengthValid = emailID.length >= 4 && emailID.length <= 16;

if (!hasDomain) {
  console.log("해당 도메인은 안됩니다");
} else if (!isLengthValid) {
  console.log("해당 이메일의 주소의 길이가 올바르지 않습니다");
} else {
  console.log("이메일 주소 등록 완료!");
}
