import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all';

function Featured() {
    const cards = [useAnimation(),useAnimation()];
    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    <div id="featured" className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-7xl font-['Founder'] trackin-tighter">
                Featured Projects
            </h1>
        </div>
            <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10">
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[65vh] ">
                    {/* <h1 className='absolute text-[#CDEA68]  left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl '> */}
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-6xl '>
                        {"House-Price-Prediction".split('').map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cards[0]} 
                            transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                            className='inline-block'>
                                {item}
                            </motion.span>
                        ))}
                        </h1>
                    {/* </h1> */}
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                        <a href="https://github.com/NityaB24/Bangalore_House_Price">
                            <img className="w-full h-full bg-cover" src="images/House Price Prediction-2.png" alt="" />
                        </a>
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[65vh] ">
                <h1 className='absolute flex overflow-hidden text-[#CDEA68]  right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl '>
                    {"Smart Parking System".split('').map((item,index)=>(
                        <motion.span 
                        initial={{y:"100%"}} 
                        animate={cards[1]} 
                        transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                        className='inline-block'>
                            {item}
                        </motion.span>
                    ))}
                </h1>
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                        <img className="w-full h-full bg-cover" src="images/Smart Parking.png" alt="" />
                    </div>
                </motion.div>
            </div>
            </div>
        
    </div>
  )
}

export default Featured