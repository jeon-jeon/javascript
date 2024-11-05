// 0, "", null, undefined, [] -> falsy
// 그 외 -> truthy
const user = prompt("고객님 이름");
const name = user || "Guest";
console.log(`${name}님이 들어왔습니다!`);

const password = prompt("비밀번호 입력");
const isLogin = password == "1234";
isLogin && alert("로그인 성공");
