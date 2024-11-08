export const makeCard = (image, name, money, mobile, hex_color, color) => {
  return `
        <article style="background-color:${hex_color}">
          <div class="left">
            <img src="${image}" alt="" />
          </div>
          <div class="right">
            <strong style="color:${color}">${name}</strong>
            <span id="money">${parseInt(money.slice(1, 7)) * 1385 + "원"}</span>
            <span id="icon">${mobile}</span>
          </div>
        </article>
      `;
};
