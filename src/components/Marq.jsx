import React from 'react';
import './styles.css';
import './styles_marq.css';
import { motion } from "framer-motion";

function Marq() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.05" className='marq'>
        <div className="text flex gap-10 overflow-hidden whitespace-nowrap">
            <motion.h1 
              initial={{x:"4%"}} 
              animate={{x:"-100%"}} 
              transition={{repeat: Infinity, type: "tween", ease: "linear", duration: 10}} 
              className="leading-none font-['Founder'] uppercase pt-7 -mb-[6vw] pr-10">
              Nitya Balar
            </motion.h1>
            <motion.h1 
              initial={{x:"4%"}} 
              animate={{x:"-100%"}} 
              transition={{repeat: Infinity, type: "tween", ease: "linear", duration: 10}} 
              className="leading-none font-['Founder'] uppercase pt-7 -mb-[6vw] pr-10">
              Nitya Balar
            </motion.h1>
        </div>
    </div>
  );
}

export default Marq;
