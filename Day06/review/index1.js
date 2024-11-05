const movies = [
  {
    name: "gladitor",
    genre: ["acion", "drama"],
    grade: "19",
    runningTime: "148",
  },
  { name: "hear me", genre: ["drama"], grade: "all", runningTime: "109" },
  { name: "amazon", genre: ["comedy"], grade: "12", runningTime: "113" },
];

const capitalize = (x) => x.toUpperCase()[0] + x.slice(1, x.length);

const hasgenre = (list, addGenre) => {
  if (!list.includes(addGenre)) list.push(addGenre);
};

// const hasgenre = (list, addGenre) => !list.includes(addGenre)) && list.push(addGenre);

const timeChange = (time) =>
  parseInt(Number(time) / 60) + "시" + (Number(time) % 60) + "분";

const result = movies.map((x) => {
  x.name = capitalize(x.name);
  hasgenre(x.genre, "drama");
  x.runningTime = timeChange(x.runningTime);
  return x;
});

console.log(result);
