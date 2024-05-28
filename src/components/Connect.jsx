import Reac,{useEffect,useRef,useState} from 'react'
import './styles_connect.css'
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
    <div className='eyes '>
        
        <div data-scroll data-scroll-speed="" className="relative">
            <div className="eyes-container">
                <div className="eye">
                    <div className="pupil">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line">
                            <div className="inner-circle"></div>
                        </div>
                </div>
            </div>
            <div className="eye">
                <div className="pupil">
                    <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line">
                        <div className="inner-circle"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
        
        <svg id='logo' width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="40" y="35" font-family="Founder" tracking-tight font-size="52px" fill="white">NB</text>
        </svg>
        </>
  )
}

export default Connect