const box = document.querySelector(".box");
const menu = ["아메리카노", "라떼", "모카"];
const order = "주문";
box.innerHTML = `<div class="card">
    <ul>${menu.map((v) => `<li>${v}</li>`).join(" ")}</ul>
    <button>${order}</button>
</div>`;
