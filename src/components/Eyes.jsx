import React, { useEffect, useState } from 'react';
import './styles_eyes.css';

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [bgImage, setBgImage] = useState('/images/NB_eyes3.png');
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyesClosed) return; // Do not rotate if eyes are closed
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [eyesClosed]);

  const handleClick = () => {
    if (window.innerWidth <= 500) return; // Prevent closing eyes on small screens
    const newBgImage = bgImage === '/images/NB_eyes3.png' ? '/images/NB_eyes4.png' : '/images/NB_eyes3.png';
    setBgImage(newBgImage);
    setEyesClosed(!eyesClosed);
  };

  return (
    <div className='eyes' onClick={handleClick}>
      <div data-scroll data-scroll-speed="-.7" className="relative">
        <img src={bgImage} alt="Eyes Background" className="bg-image" />
        <div className="eyes-container">
          <div className={`eye ${eyesClosed ? 'closed' : ''}`}>
            {!eyesClosed && (
              <div className="pupil" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="line">
                <div className="inner-circle" style={{ transform: `rotate(${-rotate}deg)` }}></div>
              </div>
            </div>
            )}
          </div>
          <div className={`eye ${eyesClosed ? 'closed' : ''}`}>
            {!eyesClosed && (
              <div className="pupil" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="line">
                <div className="inner-circle" style={{ transform: `rotate(${-rotate}deg)` }}></div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
