// js <-> document[dom] <-> html

const btn = window.document.createElement("button");
btn.innerHTML = "홍콩여행";
btn.style.backgroundColor = "orange";
window.document.body.appendChild(btn);

// const tag = window.document.createElement(prompt("태그 입력"));
// tag.innerHTML = prompt("내용 입력");
// window.document.body.appendChild(tag);

const tag = {
  type: "",
  content: "",
  bgColor: "",

  getInf() {
    this.type = prompt("태그 입력");
    this.content = prompt("내용 입력");
    this.bgColor = prompt("배경색 입력");
  },
  makeTag() {
    const newTag = document.createElement(this.type);
    newTag.innerHTML = this.content;
    newTag.style.backgroundColor = this.bgColor;
    document.body.appendChild(newTag);
  },
  start() {
    this.getInf();
    this.makeTag();
  },
};

tag.start();
tag.start();
