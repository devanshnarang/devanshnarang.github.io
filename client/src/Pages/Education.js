import React,{useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Education = () => {
  const scrollRefs = useRef([]);

  useGSAP(() => {
    scrollRefs.current.forEach((box) => {
        gsap.to(box, {
            y: 100,
            duration:1,
            ease: "circ.inOut",
            stagger:{
              amount:1.5,
              each:0.2

            },
            scrollTrigger: {
                trigger: box,
                start: 'bottom bottom',
                end: 'top 10%',
                scrub: true
            },
            ease: 'power1.inOut'
        });
    });
}, {scope:scrollRefs});

  return (
   
  
    <div id="2" className='mt-10 mb-20' style={{marginBottom:"30px",paddingTop:"45px"}}>
      <h1 className='font-bold text-2xl m-4' style={{textAlign:"center",color:"rgb(6, 251, 6)",fontSize:"2rem"}}>Education</h1>
      <div className='flex flex-row justify-evenly '>
       <div ref={el => scrollRefs.current[0] = el} className='box w-1/4 bg-slate-200 flex flex-col font-bold border-2 border-green-500 rounded-lg p-1 spe'>
            <img src="/images/dtu.png"  className="rounded-full border-1 border-green-500 m-2 h-35 w-20"/>
            <h4>Delhi Technological University</h4>
            <h4 style={{color:"green"}}>Btech in Computer Science & Engineering</h4>
            <h4>2022-2026</h4>
            <h4>Percentage/CGPA - 8.96%</h4>
        </div>
        <div ref={el => scrollRefs.current[1] = el} className='box w-1/4 bg-slate-200 flex flex-col font-bold border-2 border-green-500 rounded-lg p-1 spe'>
            <img src="/images/school.png"  className="rounded-full border-1 border-green-500 m-2 h-25 w-20"/>
            <h4>Central Board of Secondary Education</h4>
            <h4 style={{color:"green"}}>Class-XII</h4>
            <h4>2021-2022</h4>
            <h4>Percentage/CGPA - 96.2%</h4>
        </div>
        <div ref={el => scrollRefs.current[2] = el} className='box w=1/4 bg-slate-200 flex flex-col font-bold border-2 border-green-500 p-1 rounded-lg spe'>
            <img src="/images/school.png"  className="rounded-full border-1 border-green-500 m-2 h-25 w-20"/>
            <h4>Central Board of Secondary Education</h4>
            <h4 style={{color:"green"}}>Class-X</h4>
            <h4>2019-2020</h4>
            <h4>Percentage/CGPA - 96.6%</h4>
        </div>
      </div>
    </div>
  
   
  )
}

export default Education
