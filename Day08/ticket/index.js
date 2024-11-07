const total = document.getElementById("total");

const lotion = document.getElementById("lotion");
lotion.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 15000;
});

const skin = document.getElementById("skin");
skin.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 20000;
});

const lip = document.getElementById("lip");
lip.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 5000;
});
