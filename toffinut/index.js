gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".title", {
  text: "토피넛",
  duration: 2,
  yoyo: true,
  repeat: -1,
  repeatDelay: 2,
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    markers: true,
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

timeline.to(".design__text", {
  duration: 2,
  opacity: 1,
  stagger: 1,
});
