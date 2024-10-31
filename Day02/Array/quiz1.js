// 헬스장 인원 리스트 있다고 가정함

// 신규회원 2명 : 이름, 나이, 성별, 사는곳, 전화번호 입력 받고
// 헬스장 인원 리스트에 추가해서 최종 헬스장 인원리스트 콘솔로 나타내기

// const healthList = [
//   (new1 = {
//     name: prompt("이름?"),
//     age: Number(prompt("나이?")),
//     gender: prompt("성별"),
//     address: prompt("주소"),
//     phonnumber: prompt("전화번호"),
//   }),
//   (new2 = {
//     name: prompt("이름?"),
//     age: Number(prompt("나이?")),
//     gender: prompt("성별"),
//     address: prompt("주소"),
//     phonnumber: prompt("전화번호"),
//   }),
// ];

// console.log(healthList);

const gym = [];
const member1 = {};
member1.name = prompt("이름?");
member1.age = prompt("나이?");
member1.gender = prompt("성별?");
member1.address = prompt("주소?");
member1.phone = prompt("전화번호?");
gym.push(member1);

const member2 = {};
member2.name = prompt("이름?");
member2.age = prompt("나이?");
member2.gender = prompt("성별?");
member2.address = prompt("주소?");
member2.phone = prompt("전화번호?");
gym.push(member2);
console.log(gym);
