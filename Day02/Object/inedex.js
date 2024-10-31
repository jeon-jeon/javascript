// 기본타입 : String, Number, Boolean, Undefined(초기화안함), Null(없음)
// 참조타입 : Object

// Object[key-value]형태
// key : string, 정수
// value : 아무거나 가능하다

// 1. 생성자 사용
const car = new Object();
car.name = "캐스퍼";
car.maxSpeed = 300;
car.company = "현대";

const coffee = new Object();
coffee.name = "아메리카노";
coffee.shot = 2;
coffee.kcal = 5;
coffee.price = 2500;
coffee.bean = "콜롬비안";

console.log(coffee);

const coffee1 = {
  name: "라떼",
  shot: 3,
  kcal: 250,
  price: 3000,
  bean: "베트남",
  isDecaffein: false,
  recipe: {
    1: "로스팅 하기",
    2: "컵에 얼음 담고 우유 넣기",
    3: "샷 넣기",
    4: "뚜껑닫고 손놈한테 나왔다고 소리치기",
  },
};

// value 찾기
console.log(coffee1.bean); // 점 연산자
console.log(coffee1["kcal"]); // 괄호 연산자
console.log(coffee1["recipe"][3]);
console.log(coffee1.maker); // undefined

coffee1.maker = "미스터 백";
console.log(coffee1.maker); // 미스터 백
