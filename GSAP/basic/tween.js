gsap.to(".circle", {
  duration: 3,
  y: 0,
  opacity: 1,
  ease: "elastic.out(1,0.3)",
  repeat: 2,
  yoyo: true,
});

gsap.to(".box", {
  duration: 3,
  x: 0,
  opacity: 1,
});

gsap.to(".text", {
  duration: 1,
  y: 0,
  opacity: 1,
});
