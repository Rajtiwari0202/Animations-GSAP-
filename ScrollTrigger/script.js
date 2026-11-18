gsap.registerPlugin(ScrollTrigger);

// Plays immediately on load
gsap.from("#page1 #box", {
  scale: 0,
  delay: 0.3,
  duration: 1,
  rotate: 360
});

// Triggers independently on scroll
gsap.from("#page2 #box", {
  scale: 0,
  delay: 0.3,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    start: "top 80%"
  }
});

gsap.from("#page3 #box", {
  scale: 0,
  delay: 0.3,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box",
    start: "top 80%"
  }
});
