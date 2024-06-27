import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const scrollRefs = useRef([]);

  useEffect(() => {
    scrollRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: 'top 80%', // Starts the animation when the top of the box is 80% from the top of the viewport
            end: 'bottom 20%', // Ends the animation when the bottom of the box is 20% from the top of the viewport
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div id="2" className='mt-10 mb-20' style={{ paddingBottom: "30px", paddingTop: "45px" }}>
      <h1 className='font-bold text-2xl m-4' style={{ textAlign: "center", color: "rgb(6, 251, 6)", fontSize: "2rem" }}>Education</h1>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div ref={el => scrollRefs.current[0] = el} className='box w-full md:w-1/4 bg-slate-200 flex flex-col items-center font-bold border-2 border-green-500 rounded-lg p-6 m-2'>
          <img src="/images/dtu.png" className="rounded-full border-1 border-green-500 mb-4 h-35 w-20" alt="DTU" />
          <h4 className="text-center">Delhi Technological University</h4>
          <h4 className="text-center" style={{ color: "green" }}>Btech in Computer Science & Engineering</h4>
          <h4 className="text-center">2022-2026</h4>
          <h4 className="text-center">Percentage/CGPA - 8.94</h4>
        </div>
        <div ref={el => scrollRefs.current[1] = el} className='box w-full md:w-1/4 bg-slate-200 flex flex-col items-center font-bold border-2 border-green-500 rounded-lg p-6 m-2'>
          <img src="/images/school.png" className="rounded-full border-1 border-green-500 mb-4 h-25 w-20" alt="School" />
          <h4 className="text-center">Central Board of Secondary Education</h4>
          <h4 className="text-center" style={{ color: "green" }}>Class-XII</h4>
          <h4 className="text-center">2021-2022</h4>
          <h4 className="text-center">Percentage/CGPA - 96.2%</h4>
        </div>
        <div ref={el => scrollRefs.current[2] = el} className='box w-full md:w-1/4 bg-slate-200 flex flex-col items-center font-bold border-2 border-green-500 rounded-lg p-6 m-2'>
          <img src="/images/school.png" className="rounded-full border-1 border-green-500 mb-4 h-25 w-20" alt="School" />
          <h4 className="text-center">Central Board of Secondary Education</h4>
          <h4 className="text-center" style={{ color: "green" }}>Class-X</h4>
          <h4 className="text-center">2019-2020</h4>
          <h4 className="text-center">Percentage/CGPA - 96.6%</h4>
        </div>
      </div>
    </div>
  );
}

export default Education;
