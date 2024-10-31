const movie = {
  ageLimit: 15,
  name: "롱레그스",
  isShowing: true,
  ganres: ["호러", "스릴러"],
  runningTime: "101분",
  releaseDate: "2024.10.30",
  theather: [
    {
      type: "2D",
      theatherNumber: "6",
      theatherFloor: 6,
      availableSeats: 92,
      showtimes: [{ startTime: "19:50", remainSeat: 91 }],
    },
    {
      type: "2D",
      theatherNumber: "8",
      theatherFloor: 6,
      availableSeats: 142,
      showtimes: [{ startTime: "22:10", remainSeat: 142 }],
    },
  ],
};

console.log(movie);
