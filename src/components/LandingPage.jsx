import React ,{ useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import './styles.css';
import './Styles_landing.css'
import { motion , useAnimation} from 'framer-motion';

function LandingPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 });
  }, [controls]);
  
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full h-750px bg-zinc-900 pt-1 flex'>
      <div className="textstructure mt-52 ">
        {["Crafting", "Eye Opening", "digital odysseys"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex ">
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '8vw' }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 18 }}
                    className='box rounded-md relative bg-green-500'>
                    {/* <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="30" y="60" font-family="Founder" tracking-tight font-size="52px" fill="white">NB</text>
                    </svg> */}
                  </motion.div>)}

                <h1 className="heading  uppercase leading-[.75] font-['Founders']  tracking-tight">{item}</h1>
              </div>
            </div>
          );
        })}
      </div>


      {/* Image Section */}
      <motion.div 
         initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
         animate={{ opacity: 1 }} // Animate to opacity 1 (fully visible)
         transition={{ duration: 30 }} 
        className="image-section"
      >     
        <img  src="/images/about_page_4.png" alt="Your Image" />
      </motion.div>
    </div>

    <div className="three-text border-t-[1px] border-zinc-800 mt-20 flex justify-between item-center py-5">
        {["Open for work", "Step into my journey"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center ">
          <a href='#contact' className=" px-5 py-2 border-[1px] border-zinc-400 font-light uppercase rounded-full  ">start the project</a>
          {/* <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-800 font-light text-sm uppercase rounded-full">
            <span href='#contact' className="rotate-[45deg]"> <FaArrowUpLong/></span>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default LandingPage;
