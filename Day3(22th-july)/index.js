import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

const section2=document.querySelector(".section2");

gsap.to(".section1",{
    x:-200,
scrollTrigger:{
    trigger:".section2",
    start:"top 50%",
    end:"top 20%",
    scrub:true,
    markers:true,
    
},
yoyo:true
})

