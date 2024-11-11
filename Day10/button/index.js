class Button {
  constructor(bgColor) {
    this.button = document.createElement("button");
    this.button.innerText = "Button";
    this.button.style.backgroundColor = bgColor;
    this.button.style.padding = "10px 20px";
    this.button.style.borderRadius = "30px";
  }

  appendToHtml() {
    document.body.appendChild(this.button);
  }
}

const btn1 = new Button("skyblue");
btn1.appendToHtml();

const btn2 = new Button("pink");
btn2.appendToHtml();
