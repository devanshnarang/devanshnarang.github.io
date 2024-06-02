import React from 'react'
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <>
    <div id="0">
        <div  style={{color:"white",textAlign:"center",fontSize:"2.2rem",fontWeight:"bold",height:"30vh",marginTop:"20%"}}>
          <h3 >Hello,</h3>
          <h1 >
            I'm <span style={{color:"rgb(6, 251, 6)"}}>Devansh</span> Narang
          </h1>
          <h2>I'm a</h2>
          <h2 >
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer.", "Freelancer.","Programmer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home
