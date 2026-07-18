import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";

let count = 0;

let h1 = document.querySelector(".count");
const tl = gsap.timeline();
function timer() {
  const counttime = setInterval(() => {
    count++;
    h1.textContent = `${count}%`;
    if (count === 100) {
      clearInterval(counttime);
    }
  }, 10);
}
tl.from(".imagecontainer .img img", {
    scale: 0.5,
    y: "-100%",
    duration: 0.8
})
.from(".text h1 span", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// gsap.from(".box h1 span", {
//     scale:1.5,
//     y: "100%",
//     opacity: 0,
//     duration: 0.8,
//     // repeat: -1,
//     // yoyo:true,
//     stagger:{
//         each:0.1,
//         // from:"center"
//     },
//     ease: "power4.out"
// });
