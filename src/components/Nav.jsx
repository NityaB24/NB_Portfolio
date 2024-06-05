import React, { useState, useEffect } from 'react';
import './nav_styles.css';

function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setIsHidden(isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='nav' className={`fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center ${isHidden ? 'hidden' : 'show'}`}>
      <div className="logo">
        <svg width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text y="32" font-family="Founder" tracking-tight font-size="52px" fill="white">NB</text>
        </svg>
      </div>
      <div className="links flex gap-10">
        <a href="#about" className="about text-md capitalize font-regular">About</a>
        <a href="#featured" className="work text-md capitalize font-regular">Work</a>
        <a href="#skills" className="skills text-md capitalize font-regular">Skills</a>
        <a href="#contact" className="contact text-md capitalize font-regular">Contact</a>
        <a href="#menu" className="menu text-md capitalize font-regular" onClick={toggleMenu}>Menu</a>
        {isMenuOpen && (
          <div className="mobile-menu flex flex-col gap-4">
            <a href="#about" className="text-md capitalize font-regular" onClick={toggleMenu}>About</a>
            <a href="#featured" className="text-md capitalize font-regular" onClick={toggleMenu}>Work</a>
            <a href="#skills" className="text-md capitalize font-regular" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="text-md capitalize font-regular" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
