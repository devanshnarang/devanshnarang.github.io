import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaAddressBook, FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMailUnread, IoLogoLinkedin, IoMdMail } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className='social'>
      <div className="socials-container">
        <a href="https://leetcode.com/u/narangdevansh2004/"><SiLeetcode/></a>
        <a href="https://www.linkedin.com/in/devansh-narang-779210249/"><BsLinkedin/></a>
        <a href="https://github.com/devanshnarang"><FaGithub/></a>
        <a href="mailto:narangdevansh2004@gmail.com"><IoIosMailUnread/></a>
      </div>
    </div>
  ) 
}

export default Sidebar