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
                y: 100,
                rotation: 360,
                borderRadius: '10%',
                scale: 1.5,
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
            <div className='flex flex-row'>
                <div className='w-1/4 bg-lime-400' ref={el => scrollRefs.current[0] = el} style={{ marginTop: "10vh", marginLeft: "30%", marginRight: "3%", width: "200px", height: "100px" }}>
                    <img src='/images/SIH.jpeg' style={{ height: "40px", margin: "3px" }} />
                    <h4>Smart India Hackathon</h4>
                    <h4>2023</h4>
                </div>
        
                <div className='w-1/5 bg-lime-400 h-23' ref={el => scrollRefs.current[1] = el} style={{ marginTop: "45vh", marginLeft: "3%", height: "110px" }}>
                    <img src='/images/logo.png' style={{ height: "60px" }} />
                    <h4>VIHAAN HACKATHON</h4>
                    <h4>2024</h4>
                </div>
            </div>
        </div>
    );
}

export default Experience;
