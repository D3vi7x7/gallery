let main = document.querySelector("#main");
let front = document.querySelector("#front");
let image1 = document.querySelector("#front #img1");
let image2 = document.querySelector("#front #img2");
let image3 = document.querySelector("#front #img3");
let image4 = document.querySelector("#front #img4");
let image5 = document.querySelector("#front #img5");
let image6 = document.querySelector("#front #img6");

main.addEventListener('mousemove',function(dets){
    
    image1.style.transform = `translateX(${(window.innerWidth-dets.x)/30}px) translateY(${(window.innerHeight-dets.y)/30}px)`;
    
})

main.addEventListener('mousemove',function(dets){
    
    image2.style.transform = `translateX(${(window.innerWidth-dets.x)/25}px) translateY(${(window.innerHeight-dets.y)/25}px)`;
    
})

main.addEventListener('mousemove',function(dets){
    
    image3.style.transform = `translateX(${(window.innerWidth-dets.x)/30}px) translateY(${(window.innerHeight-dets.y)/30}px)`;
    
})

main.addEventListener('mousemove',function(dets){
    
    image4.style.transform = `translateX(${(window.innerWidth-dets.x)/30}px) translateY(${(window.innerHeight-dets.y)/30}px)`;
    
})

main.addEventListener('mousemove',function(dets){
    
    image5.style.transform = `translateX(${(window.innerWidth-dets.x)/30}px) translateY(${(window.innerHeight-dets.y)/30}px)`;
    
})

main.addEventListener('mousemove',function(dets){
    
    image6.style.transform = `translateX(${(window.innerWidth-dets.x)/20}px) translateY(${(window.innerHeight-dets.y)/20}px)`;
    
})

gsap.to("#img1,#img2,#img3,#img4,#img5,#img6",{
    y:-100,
    opacity:"100%",
    duration:1,
    delay:1
})

gsap.to(".load-screen",{
    width:"100%",
    left:0,
    duration:1
})

gsap.to(".load-screen",{
    width:"0%",
    left:0,
    duration:1,
    delay:1.3
})

