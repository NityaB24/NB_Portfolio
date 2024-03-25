import React from 'react'

function About_n() {
  return (
    <div id='about' data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full p-20 bg-[#CDEA66] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-tight" >Welcome to my personal portfolio!</h1>
        <h2 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-tight">
        I'm <span className="underline">Nitya Balar</span>, a pre-final year student at PDEU, specializing in <span className="bold">full stack development, data analyst, Machine Learning enthusiast, Computer Vision  and UI/UX design.</span> Outside of my academic pursuits, I have a passion for basketball and football, finding joy in the teamwork and strategy of both sports. With my diverse skill set and enthusiasm for technology and design, I'm here to showcase my work and collaborate on projects that excite and inspire. Let's explore the possibilities together!</h2>
        {/* <div className="w-full flex justify-center gap-5 border-t-[1px] pt-5 mt-2 border-[#a1b562]"> */}
            {/* <div className="w-1/2">
                <h1 className="text-7xl"></h1>
                <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div> */}
            {/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">
              <img src="about_page.png" alt="" />
            </div> */}
        {/* </div> */}
    </div>
  )
}

export default About_n