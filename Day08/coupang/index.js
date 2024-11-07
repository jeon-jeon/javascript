const count = document.getElementById("count");
const total = document.getElementById("total");
const price = 13160;

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if (Number(count.innerText) > 0) {
    count.innerText = Number(count.innerText) - 1;
    total.innerText = Number(total.innerText) - price;
  }
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  count.innerText = Number(count.innerText) + 1;
  total.innerText = Number(total.innerText) + price;
});
