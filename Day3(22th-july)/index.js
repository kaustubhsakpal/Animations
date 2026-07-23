import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

const section2=document.querySelector(".section2");

gsap.to(".section2",{
scrollTrigger:{
    trigger:".section2",
    start:"top top",
    srub:true,
    marker:true,
},
yoyo:true
})

