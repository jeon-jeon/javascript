import { data } from "./data.js";
import { makeCard } from "./render.js";

const container = document.querySelector(".container");

container.insertAdjacentHTML(
  "beforeend",
  data
    .map((v) =>
      makeCard(v.image, v.name, v.money, v.mobile, v.hex_color, v.color)
    )
    .join("")
);
