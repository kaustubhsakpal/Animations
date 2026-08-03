import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";

gsap.to(".container span",{
    duration: 2,
    x: 100,
    delay: 1,
    ease: "power1.inOut",
    stagger:true,
    repeat: -1,
    scrub:true
})