import React from 'react'



const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
   
      <footer className="container mx-auto mt-10 border-t border-gray-300 bg-black p-4">
     <p className="text-white text-center">Devansh Narang © {year}</p>
    </footer>
 
  )
}

export default Footer
