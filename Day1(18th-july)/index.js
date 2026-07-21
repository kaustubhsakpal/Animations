import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

let count = 0;
const h1 = document.querySelector(".count");

const counttime = setInterval(() => {
  count++;
  h1.textContent = `${count}%`;

  if (count === 100) {
    clearInterval(counttime);
    loadinganimation();
  }
}, 10);

function loadinganimation() {

  const tl = gsap.timeline();

  tl.to(".loader h1", {
    opacity: 0,
    duration: 0.8
  })

  .to(".loader", {
    yPercent:-100,
    duration: 1.2,
    ease: "expo.out",

    onComplete: () => {

      ScrollTrigger.refresh();

      gsap.timeline({
        scrollTrigger: {
          trigger: ".app",
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          markers: true
        }
      })

      .fromTo(".img img",
        {
          scale: 1.2
        },
        {
          scale: 1,
          ease: "none"
        },0
      )

      .fromTo(".overlaptext",
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          ease: "none"
        },0
      );

    }

  });

}