// 인천공항 A01게이트 비행기 리스트
// 비행기정보 : 종류, 회사, 출국시간, 도착시간, 목적지, 조종사, 부조종사, 총승객탑승가능수
const airplane1 = {
  type: "A1",
  company: "대한한공",
  departure: "10:00",
  arrival: "14:00",
  destination: "오사카",
  pilot: "A1-main",
  subpilot: "A1-sub",
  total: 200,
};

const airplane2 = {
  type: "J1",
  company: "진에어",
  departure: "10:00",
  arrival: "15:00",
  destination: "홍콩",
  pilot: "J1-main",
  subpilot: "J1-sub",
  total: 300,
};

const airplane3 = {
  type: "T1",
  company: "티웨이",
  departure: "15:00",
  arrival: "16:00",
  destination: "후쿠오카",
  pilot: "T1-main",
  subpilot: "T1-sub",
  total: 500,
};

const airplaneList = [airplane1, airplane2, airplane3];

console.log(airplaneList);
console.log(airplaneList[1]["subpilot"]);

// 과일리스트
const fruit = ["strawberry", "grape", "apple", "kiwi"];
console.log(fruit[2]);
