import React from 'react'
import './styles.css';
import { motion } from "framer-motion";
function Marq() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.05" className='w-full py-32 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10  overflow-hidden whitespace-nowrap">
            <motion.h1 
              initial={{x:"4%"}} 
              animate={{x:"-100%"}} 
              transition={{repeat:Infinity,type:"infinite",ease:"linear",duration:10}} 
              className="text-[22vw] leading-none font-['Founder'] uppercase pt-7 -mb-[6vw] pr-10">
              Nitya Balar
            </motion.h1>
            <motion.h1 
              initial={{x:"4%"}} 
              animate={{x:"-100%"}} 
              transition={{repeat:Infinity,type:"infinte",ease:"linear",duration:10}} 
              className="text-[22vw] leading-none font-['Founder'] uppercase pt-7 -mb-[6vw] pr-10">
              Nitya Balar
            </motion.h1>
        </div>
    </div>
  )
}
export default Marq