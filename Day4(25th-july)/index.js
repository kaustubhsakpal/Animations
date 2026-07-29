import {gsap} from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";
gsap.registerPlugin(ScrollTrigger);
gsap.from(".h12",{
    opacity:0,
    x:200,
    duration:1.2,
    delay:0.5,
    repeat:-1,
    ease:"expo.inOut",
    yoyo:true
});

gsap.to("img",{
    scale:0.7,
scrollTrigger:{
    trigger:".section2",
    start:"top 80%",
    end:"top top",
    scrub:true,
    markers:true,
}
})