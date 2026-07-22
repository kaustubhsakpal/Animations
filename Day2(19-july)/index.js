import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";

gsap.from("span",{
    yPercent:100,
    opacity:1,
    duration:1,
    ease:"expo.inOut",
    repeat:-1,
    stagger:{
        each:0.1,
        from:"random",
    },
    yoyo:true
})
