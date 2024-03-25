import React , {useEffect,useRef,useState}from 'react'

function Footer() {
    
  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20 font-["Founder"]'>

        {/* <div className="w-1/2 h-full flex flex-col justify-between"> */}
        {/* <div className="w-1/4 h-full flex flex-col justify-between">
            <div className="container">
                <h1 className='text-[10vw] uppercase leading-none -mb-10'></h1>
                <h1 className='text-[10vw] uppercase leading-none -mb-10'></h1>
            </div> */}

            
            {/* <svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="45" font-family="Founder" tracking-tight font-size="62px" fill="white">NB</text>
            </svg> */}

        {/* </div> */}
        {/* <div className="w-1/2"> */}
        <div className="w-3/4">
            <h1 className='text-[9vw] uppercase leading-none -mb-10'>get in - touch</h1>
            <div className="social dets font-['Founders'] mt-20">
                <h1 className='text-[1.5vw]'>S :</h1>
                {/* <a className="face block text-[2vw] font-light" href="#" >Facebook</a> */}
                <a className="block text-[2vw] font-light" href="https://www.instagram.com/nityab.24?igsh=cnMwcm5ucmRyanJl&utm_source=qr">Instagram</a>
                <a className="linked block text-[2vw] font-light" href="https://www.linkedin.com/in/nitya-balar-ab9066263/">LinkedIn</a>
                <a className="git block text-[2vw] font-light" href="https://github.com/NityaB24">Github</a>
            </div>

            <div className="social1 dets font-['Founders'] mt-20">
                <h1 className='text-[1.5vw] leading-none '>E :</h1>
                <a className="block text-[2vw] font-light" href="#">nityabalar@gmail.com</a>
            </div>
            <div className="social2 dets font-['Founders'] mt-10">
                <h1 className='text-[1.5vw] leading-none '>C :</h1>
                <a className="block text-[2vw] font-light" href="#">+91 7984502731</a>
                {/* <svg width="500" height="50" viewBox="0 0 500 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="420" y="45" font-family="Founder" tracking-tight font-size="62px" fill="white">NB</text>
                </svg> */}
            </div>

            <div className=" mt-5 " style={{ opacity: 0.4 }} >
                <h1 className='text-[1.5vw] leading-none '>&copy;  NB  {new Date().getFullYear()}</h1>
            </div>

            
        </div>
    </div>
  )
}

export default Footer