// class : 변수들 + 함수들

// Student : [이름,성별,나이,수강목록] + []
// class Student {
//   constructor(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
//   }

//   hello() {
//     console.log(
//       `안녕하세요. 저는 ${this.name}이고 나이는 ${this.age}입니다. 전공은 ${this.major}입니다.`
//     );
//   }

//   past() {
//     console.log(`10년전 나이는 ${this.age - 10}살입니다`);
//   }
// }

// const a = new Student("율미", 22, "유아교육과");
// a.hello();
// a.past();

// const b = new Student("나으리", 32, "컴퓨터공학과");
// b.hello();
// b.past();

// 커피 클래스
// class Coffee {
//   constructor(menu, price) {
//     this.menu = menu;
//     this.price = price;
//     this.ingredient = [];
//   }

//   order() {
//     console.log(`주문하신 ${this.menu} 가격은 ${this.price}원입니다.`);
//   }

//   plus(something) {
//     this.ingredient.push(something);
//   }

//   info() {
//     console.log(`들어간 성분은 ${this.ingredient}입니다.`);
//   }
// }

// const c = new Coffee("아이스 아메리카노", 2000);
// c.order();
// c.plus("🧊");
// c.plus("🍋");
// c.info();

// 피자 클래스
// class Pizza {
//   constructor(menu) {
//     this.menu = menu;
//     this.total = 0;
//     this.topping = [];
//   }

//   addTopping(name, price) {
//     this.topping.push({ name: name, price: price });
//   }

//   info() {
//     console.log(this.topping);
//   }
// }

// const d = new Pizza("슈프림피자");
// d.addTopping("페퍼로니", 5000);
// d.addTopping("올리브", 3000);
// d.addTopping("치즈크러스트", 3000);
// d.info();

//  영화관
class Theater {
  constructor(title, theater) {
    this.title = title;
    this.theater = theater;
    this.visitor = 0;
  }

  addVisitor(visitor) {
    this.visitor = this.visitor + visitor;
  }

  info() {
    console.log(
      `영화제목 : ${this.title}, 상영관 : ${this.theater}, 총 관람객 : ${this.visitor}`
    );
  }
}

const movie = new Theater("티니핑", "A관");
movie.addVisitor(20);
movie.addVisitor(32);
movie.addVisitor(17);
movie.info();
