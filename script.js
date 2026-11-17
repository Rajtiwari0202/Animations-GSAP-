gsap.to("#box1", {
    x: 1000,
    duration: 2, // 2 sec tak animation chalega
    delay: 1,    // 1 sec baad animation start hoga
    rotate: 360,
    backgroundColor: "rgb(28, 158, 202)",
    borderRadius: "50%",
    repeat:-1,
    yoyo:true
});

gsap.from("#box2", {
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "#da55da",
    borderRadius: "50%",
    repeat:-1,
    yoyo:true
});

gsap.from("h1", {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 1,
    stagger: 1,// Built-in GSAP stagger (1 sec delay between each h1)
    repeat:-1,
    yoyo:true
});
