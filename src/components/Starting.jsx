
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Starting = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3" ,"#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-[#CDEA66] absolute top-20 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl text-[#000000]" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl text-[#000000]" id="title-2">
          Web Developer
        </h1>
        <h1 className="text-9xl text-[#000000]" id="title-3">
          Data Analyst
        </h1>
        <h1 className="text-9xl text-[#000000]" id="title-4">
          Data Science
        </h1>
      </div>
      <div className="h-screen flex bg-grey-800 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl font-bold text-[#CDEA66] font-['Founder']"
        >
          Nitya Balar
        </h1>
      </div>
    </div>
  )
}

export default Starting
