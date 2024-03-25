import React from 'react'
import Connect from './Connect'; // Import the Connect component
import Footer from './Footer'; 
function Get_in_touch() {
  return (
    <div id="contact" className="flex">
      {/* Left side */}
      <div className="w-1/2">
        <Connect /> {/* Render the Connect component */}
      </div>
      {/* Right side */}
      <div data-scroll data-scroll-speed="0.4" className="w-1/2">
        <Footer /> {/* Render the Footer component */}
      </div>
    </div>

  )
}

export default Get_in_touch