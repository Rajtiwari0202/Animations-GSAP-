gsap.registerPlugin(ScrollTrigger);

// // Plays immediately on load
// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 0.3,
//   duration: 1,
//   rotate: 360,
// });

// // Triggers independently on scroll
// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 0.3,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     start: "top 80%",
//     scrub:2
//   },
// });

// gsap.from("#page3 #box", {
//   scale: 0,
//   delay: 0.3,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     start: "top 80%",
//     scrub:2
//   },
// });

//Notes
/*
  1. GSAP used for animate elements
  2. ScrollTrigger used for animate elements on basis of scrolling
  properties of scrollTrigger
  - trigger: 'select element you wants to trigger',
  -scroller: " body most of the times",
  -start : "animation start point",
  -end: "animation end point",
  -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
  -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
  -pin : pin the page while animating elements
    note: while using pin property make sure trigger must be parent element
  */

gsap.to("#page2 h1", {
  xPercent: -150,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true, // Remove this when you are done testing
    start: "top 0%",
    end: "top -150%", // Increased slightly so the huge text scrolls at a comfortable speed
    scrub: 2,
    pin: true,
  },
});
