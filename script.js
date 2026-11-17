// Without GSAP Timelines

// gsap.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1200,
//     rotate:360,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:4,
//     borderRadius:"50%"
// })


// With GSAP Timelines

var tl = gsap.timeline()

tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:2,
})
tl.to("#box2",{
    x:1500,
    rotate:360,
    duration:2,
})
tl.to("#box3",{
    x:1500,
    rotate:360,
    duration:2,
})
