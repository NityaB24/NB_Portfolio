import Reac,{useEffect,useRef,useState} from 'react'

function Connect() {

  const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
            
        })
    })
    
  return (
    <>
    <div className='eyes w-full h-screen overflow-hidden'>
        
          <div data-scroll data-scroll-speed="0.6" className="relative w-full h-full bg-cover bg-center">
            {/* <div data-scroll data-scroll-section data-scroll-speed="-0.5" className='w-full p-40 bg-[#CDEA66] text-black'>
              
                <div className="w-full flex justify-center items-center">
                    <div className="w-1/2 text-center">
                        <h1 className="text-[7vw] leading-none font-['Founder'] uppercase pt-30">Let's Connect and Make Something Great Together!</h1>
                        
                        {/* <button className='flex uppercase gap-3 items-center px-3 py-3 bg-zinc-900 mt-1 rounded-full text-white'>Contact
                            <div className="w-1 h-1 bg-zinc-100 rounded-full"></div>
                        </button> */}
                    {/* </div>
                </div>
              
            </div> */} 
      

  {/* ----------------------Eyes section------------------------------- */}
            <div className="absolute flex gap-10 top-1/2 left-1 transform -translate-x-1 -translate-y-1  ">
                <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100 ml-20">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="40" y="35" font-family="Founder" tracking-tight font-size="52px" fill="white">NB</text>
        </svg>
        </>
  )
}

export default Connect