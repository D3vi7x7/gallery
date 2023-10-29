gsap.to("#img1home",{
    opacity:"100%",
    delay:2
})

gsap.from("#img1bd,#img1head,#img1bd2,#img1lnk",{
    opacity:0,
    y:100,
    duration:1,
    ease:"Expo.easeOut",
    delay:2.4
})

gsap.to(".load-screen1",{
    delay:0.5,
    width:"100%",
    left:0,
    duration:1
})

gsap.to(".load-screen1",{
    width:"100%",
    left:"100%",
    duration:1,
    delay:2.1
})