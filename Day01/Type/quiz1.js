const price = prompt("아메리카노 얼마?");
const count = prompt("아메리카노 몇 잔?");
const countNum = Number(count);
const totalCost = Number(price) * countNum;
alert(`아메리카노 총 ${countNum}잔의 가격은 ${totalCost}원입니다.`);

const nemo = prompt("정사각형 한 변의 길이를 입력하세요.");
const nemo1 = Number(nemo) * 4;
const nemo2 = Number(nemo) * Number(nemo);
alert(`정사각형 둘레는 ${nemo1}, 넓이는 ${nemo2}`);

const semo1 = prompt("정삼각형 밑변");
const semo2 = prompt("정삼각형 높이");
const semo3 = Number(semo2) * 3;
const semo4 = (Number(semo1) * Number(semo2)) / 2;
alert(`정삼각형 둘레는 ${semo3}, 넓이는 ${semo4}`);

const circle = prompt("반지름 길이");
const circle1 = Number(circle) * 2 * 3.14;
const circle2 = Number(circle) * Number(circle) * 3.14;
alert(`원의 둘레는 ${circle1}, 넓이는 ${circle2}`);
