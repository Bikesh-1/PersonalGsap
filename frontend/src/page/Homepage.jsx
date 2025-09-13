/* eslint-disable no-unused-vars */
import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const langRef = useRef([]);
  const arrowref = useRef(null);
  const videoref = useRef(null);
  const textref = useRef(null);
  const bgref = useRef(null);
  const scrollRef = useRef(null);
   

  useEffect(() => {
    const tl = gsap.timeline({repeat: -1});  // this is making text show one by one infinte time

    langRef.current.forEach((el,i) => {
        tl.fromTo(
            el,
            {opacity:0,y:50},
            {opacity:1 , y:0,duration:1,ease:"power2.out"}
        ).to(el,{opacity:0,y:-50,duration:1,delay:1});
    })
  }, []);

  useEffect(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:arrowref.current,
            start:"-=300",
            end: "+=1000",
            pin:true,
            scrub:1,
        }
    });
    tl.to(arrowref.current, { x: 900, duration: 2, ease: "power3.out" })
    .to(arrowref.current,{y:-150 ,x:1000,duration:1,ease: "power3.out" })
    .to(arrowref.current,{opacity:0})
  },[])


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:videoref.current,
        start:"top bottom",
        end: "+=2000",
        scrub:1,
      }
    });
    tl.to(videoref.current, {
      scale:2,
      opacity: 0,
      ease: "power3.out",
    duration:2,
    delay:1
    });
  }, []);
// useEffect(() => {
//   gsap.to(videoref.current, {
//     scale: 2,
//     opacity: 0,
//     ease: "power3.out",
//     duration:2,
//     delay:2
//   });
// }, []);

useEffect(() =>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:textref.current,
      start:"top top",
      end: "+=500",
      scrub:1,
    },
  });
  tl.to(textref.current,{
    scale:0,
    display:"none",
    duration:0.2,
      opacity:0,
  })
},[])

// useEffect(() =>{
//     gsap.to(textref.current,{
//       scale:0.5,
//         opacity:0,
//         delay:4
//     })
// },[])

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: bgref.current,
      start: "top top",
      end: "+=1000",
      
      pin: true,
      scrub: 1,
    },
  });

  tl.to(bgref.current, {
    scaleX: 0.38,
    scaleY: 0.5,
    y: 68,
    x: 400,
    duration: 2,
    borderRadius: "5rem",
    delay: 4,
  });
}, []);

// useEffect(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: scrollRef.current,
//       start: "top top",
//       end: "+=1000",
      
//       pin: true,
//       scrub: 1,
//       markers: true,
//     },
//   });
// }, []);


  return (
    <div>
      
        <div 
        // ref={scrollRef}
         className="flex fixed  justify-center items-center w-screen h-[100vh] bg-white">

            <div className="w-1/2">
                <h1 className="text-[4rem] font-bold italic">Freeing Humans to Do What Matters</h1>
                <p className="font-medium text-[2.5rem] text-[#6f6f6f]">Tvara was born to free people from repetitive, draining tasks, so they can focus on decisions that truly matter.</p>
            </div>
            <div>
                <img src="https://ik.imagekit.io/jwt52yyie/logo.svg?updatedAt=1757712060003" className="w-[35.313rem] h-[32rem]" alt="" />
            </div>

        </div>
        <div ref={bgref} className="absolute top-0 left-0 z-10 w-[100vw] h-[100vh] overflow-hidden bg-black ">
      <div ref={textref} className="flex flex-row items-start justify-between p-4 ">
        <div  className="text-[#0f0f0f] text-[8rem] font-semibold w-auto relative -z-10">
          <h1 className="m-0 leading-none">Tvara Thinking</h1>
          <h1 className="m-0 leading-none">Tvara Thinking</h1>
          <h1 className="m-0 leading-none">Tvara Thinking</h1>
          <h1 className="m-0 leading-none">Tvara Thinking</h1>
        </div>

        <div className="relative items-end text-end">
          <h1 className="text-white text-[4rem] font-[600] italic m-0 leading-none">
            We believe in
          </h1>

          <div className="relative h-[8.75rem] w-[31.25rem]">
            <h1
              ref={(el) => (langRef.current[0] = el)}
              className="font-bold text-white text-[8rem] m-0 leading-none w-auto absolute inset-0"
            >
              त्वरा
            </h1>
            <h1
              ref={(el) => (langRef.current[1] = el)}
              className="font-bold text-white text-[8rem] m-0 leading-none absolute inset-0"
            >
              トヴァ
            </h1>
            <h1
              ref={(el) => (langRef.current[2] = el)}
              className="font-bold text-white text-[8rem] m-0 leading-none absolute inset-0"
            >
              ત્વરા
            </h1>
            <h1
              ref={(el) => (langRef.current[3] = el)}
              className="font-bold text-white text-[8rem] m-0 leading-none absolute inset-0"
            >
              ত্বরা
            </h1>
            <h1
              ref={(el) => (langRef.current[4] = el)}
              className="font-bold text-white text-[8rem] m-0 leading-none absolute inset-0"
            >
              ತ್ವರಾ
            </h1>
          </div>

          <h1 className="text-white text-[4rem] font-[600] italic m-0 leading-none">
            Thinking
          </h1>
        </div>
      </div>
      <div >
        <video ref={videoref} className="w-[50rem] rounded-xl absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" autoPlay loop muted playsInline>
            <source src="https://ik.imagekit.io/jwt52yyie/city.mp4?updatedAt=1757706734500" type="video/mp4"/>
        </video>
      </div>
     
    </div>
     <div ref={arrowref}
      className="absolute z-50 w-[26rem] -bottom-40 -rotate-[9.8deg]">
        <img src="https://ik.imagekit.io/jwt52yyie/Vector.svg?updatedAt=1757707455553" alt="" />
      </div>
      <div className="flex absolute z-0 justify-center items-center w-screen h-[100vh] ">
        
      </div>
    </div>
    
  );
}

export default Homepage;