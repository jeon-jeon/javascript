import { minus, plus } from "./calc.js";
import { bye, hello } from "./greeting.js";

console.log(plus(2, 3));
console.log(minus(10, 1));

const helloBtn = document.getElementById("hello");
helloBtn.addEventListener("click", hello);

const byeBtn = document.getElementById("bye");
byeBtn.addEventListener("click", bye);

// console.log(document.querySelectorAll(".button"));
// console.log(document.querySelector(".button"));
