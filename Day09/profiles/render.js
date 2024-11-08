export const makeCard = (image, name, job) => {
  return `
        <div id="card" class="card">
          <img src=${image} alt="" />
          <div class="namecard">
            <strong id="name" class="name">${name}</strong>
            <span class="job">${job}</span>
          </div>
        </div>
      `;
};
