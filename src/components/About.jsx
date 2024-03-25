import React from 'react'
import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import './styles1.css';

function About() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16
      })
    }


    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x  ,
      y: mousePosition.y  ,
    },
    text: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      backgroundColor: "#95E889",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full p-20 bg-[#CDEA66] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-tight" >Welcome to my personal portfolio!</h1>
        <h2 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-tight">
        I'm <span onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'> Nitya Balar, </span>
      a pre-final year student at PDEU, specializing in <span onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'> full stack development, data analyst, Machine Learning enthusiast, Computer Vision  and UI/UX design.</span> Outside of my academic pursuits, I have a passion for basketball and football, finding joy in the teamwork and strategy of both sports. With my diverse skill set and enthusiasm for technology and design, I'm here to showcase my work and collaborate on projects that excite and inspire. Let's explore the possibilities together!</h2>
      <motion.div 
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
        <div className="w-full flex justify-center gap-5 border-t-[1px] pt-5 mt-2 border-[#a1b562]">
            {/* <div className="w-1/2">
                <h1 className="text-7xl"></h1>
                <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div> */}
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
        </div>
    </div>
  )
}

export default About