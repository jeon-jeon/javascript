gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    markers: true,
    pin: true,
    scrub: 1,
  },
});

timeline.to(".container", {
  x: -1360,
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".third",
  start: "top top",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
  scrub: 3,
});

ScrollTrigger.create({
  trigger: ".fourth",
  start: "top top",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
  scrub: 3,
});

ScrollTrigger.create({
  trigger: ".fifth",
  start: "top top",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});
