import {gsap} from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
let h1 = document.querySelector("h1");

gsap.to("h1",{
    x:200,
    duration:1.2,
    delay:0.5,
    repeat:-1,
    ease:"expo.inOut"
});