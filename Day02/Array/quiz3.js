const ticket = {
  airplanType: "TW211B737-800",
  departure: "08:35",
  arrival: "10:55",
  origin: "서울/인천",
  destination: "도쿄/나리타",
  runtime: "2h 20m",
  economy: [
    { type: "event", price: 0, remainSeat: 0 },
    { type: "smart", price: 161000, remainSeat: 4 },
    { type: "normal", price: 371000, remainSeat: 9 },
  ],
};

console.log(ticket);
