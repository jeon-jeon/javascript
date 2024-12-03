// 타임라인 생성
const timeline = gsap.timeline();

timeline.to(".circle", {
  duration: 2,
  y: 0,
  opacity: 1,
});

timeline.to(
  ".box",
  {
    duration: 2,
    x: 0,
    opacity: 1,
  },
  "-=1"
);

timeline.to(".text", {
  duration: 2,
  y: 0,
  opacity: 1,
});
