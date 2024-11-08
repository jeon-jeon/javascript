import { data } from "./data.js";
import { makeCard } from "./render.js";

const box = document.getElementById("box");

// box.innerHTML = `
// ${data.map((v) => makeCard(v.image, v.name, v.job_title)).join("")}
// `;

box.insertAdjacentHTML(
  "beforeend",
  data.map((v) => makeCard(v.image, v.name, v.job_title)).join("")
);
