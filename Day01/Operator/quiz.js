// 몇년생인지 물어보고 알럿으로 2006년생 이후이면 미성년자입니다! 아니면 성인입니다!
const year = prompt("몇 년생이니");
const result = Number(year) >= 2006 ? "미성년자입니다" : "성인입니다";

alert(result);

// 키를 물어보고 140 이상이면 알럿으로 해당 놀이기구를 탈 수 있습니다. 아니면 탈 수 없습니다
const height = prompt("키 몇이니");
const result1 = Number(height) >= 140 ? "탈 수 있습니다." : "탈 수 없습니다.";

alert(`해당 놀이기구를 ${result1}`);

// 영어 점수와 수학 점수를 물어보고
// 영어 점수와 수학 점수가 평균이 60점 이상이면 합격이고
// 단 둘 중 하나라도 60점 이하이면 탈락이고
// 또는 평균이 60점 이하여도 탈락입니다.
const english = prompt("영어 점수");
const math = prompt("수학 점수");

const isEngOver60 = Number(english) >= 60;
const isMathOver60 = Number(math) >= 60;
const isAvgOver60 = (Number(english) + Number(math)) / 2 >= 60;

const result2 = isEngOver60 && isMathOver60 && isAvgOver60 ? "합격" : "탈락";

alert(result2);

// 숫자를 입력받고 알럿으로 홀수인지 짝수인지 나타내기
const num = prompt("숫자입력");
const result3 = Number(num) % 2 ? "홀수" : "짝수";
alert(result3);
