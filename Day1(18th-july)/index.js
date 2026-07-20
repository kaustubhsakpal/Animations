// import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
// import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";
// gsap.registerPlugin(ScrollTrigger) 
// let count = 0;

// let h1 = document.querySelector(".count");
//   const counttime = setInterval(() => {
//     count++;
//     h1.textContent = `${count}%`;
//     if (count === 100) {
//       clearInterval(counttime);
//       loadinganimation();
//     }
//   }, 10);


//   function loadinganimation(){
//       const tl = gsap.timeline();
//       tl.to(".loader h1",{
//         opacity:0,
//         duration:1.6,
//         ease:"power.out"
//       }).to(".loader",{
//         xPercent:-100,
//         duration:1.2,
//         ease:"expo.out"
//       }).from(".img",{
//         scale:1.2,
//         duration:1,
//         ease:"expo.out",
         
//       },"kaush").from(".overlaptext",{
//         opacity:0,
//         duration:1,
//         ease:"expo.out",
//       },"kaush")
//   }

//   gsap.to(".app",{
//     scale:1,
//     scrollTrigger:{
//       trigger:".img",
//       start:"top top",
//       end:"bottom top", 
//       scrub:true,
//       markers:true
//     }
//   })


import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

let count = 0;
const h1 = document.querySelector(".count");

const counttime = setInterval(() => {

    count++;
    h1.textContent = count + "%";

    if (count === 100) {

        clearInterval(counttime);
        loadinganimation();

    }

},10);

function loadinganimation(){

    const tl = gsap.timeline();

    tl.to(".loader h1",{
        opacity:0,
        duration:1
    })

    .to(".loader",{
        xPercent:-100,
        duration:1.2,

        onComplete:()=>{

            ScrollTrigger.refresh();

        }

    })

    .from(".img",{
        scale:1.2,
        duration:1
    })

    .from(".overlaptext",{
        opacity:0,
        duration:1
    },"<");

}

gsap.to(".app",{

    scale:1,

    scrollTrigger:{

        trigger:".app",
        start:"top top",
        scrub:true,
        markers:true

    }

});