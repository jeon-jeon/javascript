// const minus = document.createElement("button");
// minus.innerHTML = "-";

// const num = document.createElement("span");
// num.innerHTML = 0;

// const plus = document.createElement("button");
// plus.innerHTML = "+";

// minus.addEventListener("click", () => {
//   num.innerHTML = Number(num.innerHTML) - 1;
// });

// plus.addEventListener("click", () => {
//   num.innerHTML = Number(num.innerHTML) + 1;
// });

// document.body.appendChild(minus);
// document.body.appendChild(num);
// document.body.appendChild(plus);

const counter = {
  count: 0,
  makeTag(tagName, content, func) {
    const newTag = document.createElement(tagName);
    newTag.innerHTML = content;
    newTag.addEventListener("click", func);
    this.append(newTag);
  },

  substract() {
    this.count--;
  },
  add() {
    this.count++;
  },
  append(tag) {
    document.body.appendChild(tag);
  },
};

counter.makeTag("button", "-", counter.substract);
counter.makeTag("span", counter.count, () => {});
counter.makeTag("button", "+", counter.add);
