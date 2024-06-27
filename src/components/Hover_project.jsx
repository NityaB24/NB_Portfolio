import React, { useState } from 'react';
import './hover.css';

const projects = [
  {
    img: "/images/House Price Prediction-2.png",
    description: "House Price Prediction",
    title: "ML, Flask, Python, Html",
    link: "https://github.com/NityaB24/Bangalore_House_Price_Prediction"
  },
  {
    img: "/images/Smart Parking.png",
    description: "Smart Parking System",
    title: "CV, Python",
    link: "https://github.com/NityaB24/OpenCV_Mediapipe-Projects/tree/main/Smart%20Parking%20System"
  },
  {
    img: "/images/Thought Sphere.png",
    description: "Thought Sphere",
    title: "MongoDB, Node Js, Express Js",
    visit: "https://thoughtsphere.onrender.com",
    link: "https://github.com/NityaB24/Thought-Sphere"
  },
  {
    img: "/images/E-Commerce.png",
    description: "E-Commerce Website",
    title: "React Js, MongoDB, Node Js",
    link: "https://github.com/NityaB24/Personal_Bookshelf"
  },
  {
    img: "/images/Booking.png",
    description: "Booking.com Clone",
    title: "React Js, MongoDB, Node Js",
    link: "https://github.com/NityaB24/Booking.com"
  },
  {
    img: "/images/Biker-nation.png",
    description: "Biker-Nation",
    title: "Next Js, Sanity io",
    link: "https://github.com/NityaB24/Biker-nation"
  },
  {
    img: "/images/Vt-Excel.png",
    description: "VT-Excel Invoice System",
    title: "Excel Js, HTML, CSS, JS ",
    visit:"https://vt-nu.vercel.app",
    link: "https://github.com/NityaB24/VT"
  },
  {
    img: "/images/Notes.png",
    description: "Notes App",
    title: "React Js, Framer Motion",
    visit: "https://notes-five-mu.vercel.app",
    link: "https://github.com/NityaB24/Notes"
  },
  {
    img: "/images/Personal Bookshelf.png",
    description: "Personal Bookshelf",
    title: "React Js, Open Library API",
    visit: "https://personal-bookshelf-virid.vercel.app",
    link: "https://github.com/NityaB24/Personal_Bookshelf"
  }
];

function Hover_project() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <>
      <div id="featured" className="w-full py-20">
        <div className="te w-full border-b-[1px] border-zinc-700 ">
          <h1 className="text-7xl font-['Founder'] tracking-tighter">Featured Projects</h1>
        </div>
        <div data-scroll data-scroll-speed="0.2" className='container'>
          <div className="card__container">
            {currentProjects.map((project, index) => (
              <article key={index} className="card__article">
                <img src={project.img} alt={project.description} className='card__img' />
                <div className="card__data">
                  <span className="card__description">{project.description}</span>
                  <h2 className="card__title">{project.title}</h2>
                  {project.visit && (
                    <button className="card__button1" onClick={() => window.location.href = project.visit}>
                      Visit
                    </button>
                  )}
                  <button className="card__button" onClick={() => window.location.href = project.link}>
                    Github
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination-buttons">
            {currentPage > 0 && (
              <button className="pagination-button" onClick={handlePrevious}>Previous</button>
            )}
            {currentPage < totalPages - 1 && (
              <button className="pagination-button" onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hover_project;
