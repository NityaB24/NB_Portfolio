import React, { useEffect, useState } from 'react';
import './styles_new_eyes.css';

const Eye = ({ x, y, radius, mouse }) => {
  const [theta, setTheta] = useState(0);

  useEffect(() => {
    const dx = mouse.x - x;
    const dy = mouse.y - y;
    setTheta(Math.atan2(dy, dx));
  }, [mouse, x, y]);

  const irisX = x + (Math.cos(theta) * radius) / 10;
  const irisY = y + (Math.sin(theta) * radius) / 10;
  const irisRadius = radius / 1.3;
  const pupilX = x + (Math.cos(theta) * radius) / 2.1;
  const pupilY = y + (Math.sin(theta) * radius) / 2.1;
  const pupilRadius = radius / 2.7;

  return (
    <div className="eye-container" style={{ left: x - radius, top: y - radius }}>
      <div className="eye" style={{ width: radius * 2, height: radius * 2 }} />
      <div
        className="pupil"
        style={{
          width: irisRadius * 2,
          height: irisRadius * 2,
          left: irisX - irisRadius - (x - radius),
          top: irisY - irisRadius - (y - radius),
        }}
      />
      <div
        className="pupil-reflection"
        style={{
          width: pupilRadius / 1.1,
          height: pupilRadius / 1.1,
          left: pupilX - pupilRadius / 3.3 - (x - radius),
          top: pupilY - pupilRadius / 3.3 - (y - radius),
        }}
      />
    </div>
  );
};

function New_Eyes() {
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [leftEye, setLeftEye] = useState(null);
  const [rightEye, setRightEye] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateEyes = () => {
      const eyeRadius = window.innerWidth < 600 ? 50 : 100; // Adjust radius for smaller screens
      const eyeDistance = window.innerWidth < 600 ? 100 : 250; // Adjust distance for smaller screens
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setLeftEye({ x: centerX - eyeDistance / 2, y: centerY, radius: eyeRadius });
      setRightEye({ x: centerX + eyeDistance / 2, y: centerY, radius: eyeRadius });
    };

    updateEyes();
    window.addEventListener('resize', updateEyes);

    return () => {
      window.removeEventListener('resize', updateEyes);
    };
  }, []);

  return (
    <div className="eyes">
      
      <div className="bg-container">
        <img src='/images/NB_eyes3.png' alt="Eyes Background" className="bg-image" />
        {leftEye && <Eye x={leftEye.x} y={leftEye.y} radius={leftEye.radius} mouse={mouse} />}
        {rightEye && <Eye x={rightEye.x} y={rightEye.y} radius={rightEye.radius} mouse={mouse} />}
      </div>
    </div>
  );
}

export default New_Eyes;
