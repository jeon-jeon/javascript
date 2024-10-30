// MBTI
// E or I? S or N? T or F? P or J
// result : 당신의 성향은 외향적/내향적이며 감각적/직관적이며 사고형/감정형이며 즉흥적/계획적이시군요
const e_i = prompt("E or I?");
const s_n = prompt("S or N?");
const t_f = prompt("T or F?");
const p_j = prompt("P or J?");

const e_i_result = e_i == "E" ? "외향적" : "내향적";
const s_n_result = s_n == "S" ? "감각적" : "직관적";
const t_f_restlt = t_f == "T" ? "사고형" : "감정형";
const p_j_result = p_j == "P" ? "즉흥적" : "계획적";

alert(
  `당신의 성향은 ${e_i_result}이며 ${s_n_result}이며 ${t_f_restlt}이며 ${p_j_result}이군요!`
);

// 10000~99999 정수를 입력 받고 각 숫자의 단위를 붙여서 나타내기
// 23587 : 2만3천5백8십7
const num = Number(prompt("10000~99999 정수 입력"));
const num1 = parseInt(num / 10000);
const num2 = parseInt((num % 10000) / 1000);
const num3 = parseInt((num % 1000) / 100);
const num4 = parseInt((num % 100) / 10);
const num5 = parseInt(num % 10);

alert(`${num1}만 ${num2}천 ${num3}백 ${num4}십 ${num5}`);

// 정수 입력받고 시분초로 나타내기
// 132 : 2분 12초
const clockNum = Number(prompt("정수 입력"));
const hour = parseInt(clockNum / 3600);
const min = parseInt((clockNum % 3600) / 60);
const sec = parseInt(clockNum % 60);

alert(`${hour}시간 ${min}분 ${sec}초`);
