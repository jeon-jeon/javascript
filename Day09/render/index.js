import { menu } from "./data.js";
import { makeCard } from "./render.js";

const container = document.querySelector(".container");

// container.innerHTML = `
//     ${menu.map((v) => makeCard(v.imgSrc, v.name)).join("")}
// `;
// join : 배열을 문자열로 바꿔주는 함수

container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
