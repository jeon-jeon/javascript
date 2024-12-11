gsap.registerPlugin(ScrollTrigger, TextPlugin);

const sc_page_timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_page",
    pin: true,
    scrub: true,
    // markers: true,
    start: "top top",
    end: "300% bottom",
  },
});

sc_page_timeline.to(".page_2", {
  x: 0,
  duration: 10,
});

sc_page_timeline.to(".page_3", {
  x: 0,
  duration: 10,
});

sc_page_timeline.to(".page_4", {
  x: 0,
  duration: 10,
});

sc_page_timeline.to(".page_5", {
  x: 0,
  duration: 10,
});

sc_page_timeline.to(".page_6", {
  x: 0,
  duration: 10,
});

const sc_img_timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_img",
    pin: true,
    scrub: true,
    // markers: true,
    start: "top top",
    end: "300% bottom",
  },
});

sc_img_timeline.to(".invite_title", {
  duration: 1,
  opacity: 1,
  stagger: 0.5,
});

sc_img_timeline.to(".img_scroll", {
  y: -1000,
  duration: 5,
  stagger: 1,
  opacity: 0.3,
});

sc_img_timeline.to(".invite_content", {
  y: 0,
  duration: 3,
  stagger: 1,
  opacity: 1,
});

const sc_card_timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_card",
    pin: true,
    scrub: true,
    // markers: true,
    start: "top top",
    end: "300% bottom",
  },
});

sc_card_timeline.to(".card1", {
  y: 0,
  duration: 3,
  opacity: 1,
});

sc_card_timeline.to(".card2", {
  y: 0,
  duration: 3,
  opacity: 1,
});
sc_card_timeline.to(".card3", {
  y: 0,
  duration: 3,
  opacity: 1,
});
sc_card_timeline.to(".card4", {
  y: 0,
  duration: 3,
  opacity: 1,
});
sc_card_timeline.to(".card5", {
  y: 0,
  duration: 3,
  opacity: 1,
});
