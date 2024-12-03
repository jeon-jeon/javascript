gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second", // 실행 시켜주는 스위치
    markers: true, // 개발할 때 보여주는 선
    scrub: true, // 스크롤에 따라서 애니메이션이 동기화

    // 트리거 요소, 뷰포트
    start: "top top", // second의 top(맨위)에 화면의 top(맨위)에 도달했을 때 시작
    end: "bottom center", // second의 center(중앙)이 center(중앙)에 도달했을 때 끝
  },
});

// timeline.to(".box", {
//   duration: 2,
//   x: 0,
// });

timeline.to(".text", {
  duration: 3,
  opacity: 1,
});
