import Reac,{useEffect,useRef,useState} from 'react'

function Eyes() {

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
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('/images/NB_eyes3.png')]">
            <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes