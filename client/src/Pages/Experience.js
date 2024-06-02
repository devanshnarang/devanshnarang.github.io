import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const scrollRefs = useRef([]);

    useGSAP(() => {
        scrollRefs.current.forEach((box) => {
            gsap.to(box, {
                y: 80,
                rotation: 360,
                borderRadius: '10%',
                scale: 1.3,
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
        <div id="3" style={{paddingTop:"65px"}}>
            <h1 style={{ color: "rgb(6, 251, 6)", textAlign: "center", fontWeight: "bolder", fontSize: "1.4rem" }}>EXPERIENCE</h1>
            <div className='flex flex-col md:flex-row'>
                <div className='w-48 md:w-1/4 mb-16 bg-lime-400 mx-auto md:ml-10 md:mr-0 mb-4 md:mb-0' ref={el => scrollRefs.current[0] = el}>
                    <img src='/images/SIH.jpeg' className="h-16 mx-auto my-2" alt="Smart India Hackathon" />
                    <h4 className="text-center">Smart India Hackathon</h4>
                    <h4 className="text-center">2023</h4>
                </div>
        
                <div className='w-48 md:w-1/4 bg-lime-400 mx-auto md:mr-4 md:ml-13' ref={el => scrollRefs.current[1] = el}>
                    <img src='/images/logo.png' className="h-16 mx-auto my-2" alt="VIHAAN HACKATHON" />
                    <h4 className="text-center">VIHAAN HACKATHON</h4>
                    <h4 className="text-center">2024</h4>
                </div>
            </div>
        </div>
    );
}

export default Experience;
