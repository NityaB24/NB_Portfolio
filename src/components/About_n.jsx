import React from 'react';
import './styles_about.css';

function About_n() {
  return (
    <div id='about' data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full p-20 bg-[#CDEA66] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-normal">Welcome to my personal portfolio!</h1>
      <h2 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-normal">
        I'm <span className="underline">Nitya Balar</span>, a final year student at PDEU, specializing in <span className="bold">full stack development, data analyst, Machine Learning enthusiast, Computer Vision  and UI/UX design.</span> Outside of my academic pursuits, I have a passion for basketball and football, finding joy in the teamwork and strategy of both sports. With my diverse skill set and enthusiasm for technology and design, I'm here to showcase my work and collaborate on projects that excite and inspire. Let's explore the possibilities together!
      </h2>
    </div>
  );
}

export default About_n;
