import React from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Marq from './components/Marq'
import About_n from './components/About_n'
// import About from './components/About'
import Eyes from './components/Eyes'
// import Featured from './components/Featured'
// import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
// import Connect from './components/Connect'
import Starting from './components/Starting' 
import Skills from './components/Skills'
import Get_in_touch from './components/Get_in_touch'
import Hover_project from './components/Hover_project'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (

    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Nav/>
      <Starting/>
      <LandingPage/>
      <Marq/>
      {/* <About/> */}
      <About_n/>
      <Eyes/>
      {/* <Featured/> */}
      <Hover_project/>
      <Skills/>
      <Get_in_touch/>
      {/* <Connect/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App