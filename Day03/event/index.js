// event : 상호작용 하는거
// 클릭, 글쓰기, 스크롤, 데이터가져오기, ...

const btn = document.createElement("button");
btn.innerHTML = "버튼";

const hello = () => {
  alert("안녕!");
};

//btn.addEventListener(이벤트, 이벤트가 발생했을 때 일어나는 함수);
btn.addEventListener("click", hello);
document.body.appendChild(btn);
