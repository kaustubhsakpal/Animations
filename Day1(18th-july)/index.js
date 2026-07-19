import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";

let count = 0;

let h1 = document.querySelector(".count");
  const counttime = setInterval(() => {
    count++;
    h1.textContent = `${count}%`;
    if (count === 100) {
      clearInterval(counttime);
      loadinganimation();
    }
  }, 10);

  function loadinganimation(){
      const tl = gsap.timeline();
      tl.to(".loader h1",{
        opacity:0,
        duration:1.6,
        ease:"power.out"
        
      }).to(".loader",{
        yPercent:-100,
        duration:1.2,
        ease:"expo.out"
      }).from(".img",{
        scale:1.2,
        duration:1.3,
        ease:"expo.out"
      },"kaush")
  }