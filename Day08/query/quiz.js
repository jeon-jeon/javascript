const num = document.getElementById("num");

const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", () => {
  const number = Number(num.innerText);
  if (number > 0) {
    num.innerText = number - 1;
  }

  if (number - 1 < 10) {
    num.style.color = "black";
  } else {
    num.style.color = "red";
  }
});

const plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", () => {
  const number = Number(num.innerText);
  num.innerText = number + 1;

  if (number + 1 < 10) {
    num.style.color = "black";
  } else {
    num.style.color = "red";
  }
});
