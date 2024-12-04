gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".title", {
  text: "CHRISTMAS",
  duration: 2,
  yoyo: true,
  repeat: -1,
  repeatDelay: 2,
});

const timeline_first = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    // markers: true,
  },
});

timeline_first.to(".img1", {
  duration: 3,
  opacity: 0,
});

timeline_first.to(".video1", {
  duration: 3,
  opacity: 1,
});

const timeline_second = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    // markers: true,
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

timeline_second.to(".design__text", {
  duration: 2,
  opacity: 1,
  stagger: 1,
});

const timeline_third = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    // markers: true,
    start: "top center",
  },
});

timeline_third.to(".item", {
  duration: 1,
  opacity: 1,
  stagger: 0.5,
});

const timeline_fourth = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    // markers: true,
    pin: true,
    scrub: 1,
    // start: "-10% top",
    // end: "bottom bottom",
  },
});

timeline_fourth.to(".more_container", {
  x: -2000,
  duration: 3,
});

timeline_fourth.to(".badge_contatiner", {
  duration: 2,
  y: 0,
  opacity: 1,
});

const timeline_fifth = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth",
    // markers: true,
    pin: true,
    scrub: 1,
    start: "-10% top",
    end: "bottom center",
  },
});

timeline_fifth.to(".brandBox", {
  x: 0,
  duration: 3,
  stagger: 1,
  opacity: 1,
});
