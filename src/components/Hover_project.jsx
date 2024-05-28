import React from 'react'
import './hover.css'
function Hover_project() {
  return (
    <>
    <div id="featured" className="w-full py-20">
    <div className="te w-full  border-b-[1px] border-zinc-700 ">
            <h1 className="text-7xl font-['Founder'] trackin-tighter">
                Featured Projects
            </h1>
        </div>
    <div data-scroll data-scroll-speed="0.2" className='container'>
        <div className="card__container">
            <article className="card__article">
                <img src="/images/House Price Prediction-2.png" alt="" className='card__img'/>
                <div className="card__data">
                    <span className="card__description">House Price Prediction</span>
                    <h2 className="card__title">
                    ML, Flask, Python, Html
                    </h2>
                    <button className="card__button " onClick={() => window.location.href = "https://github.com/NityaB24/Bangalore_House_Price_Prediction"}>
                        Github
                    </button>
                </div>
            </article>
            <article className="card__article">
                <img src="/images/Smart Parking.png" alt="" className='card__img'/>
                <div className="card__data">
                    <span className="card__description">Smart Parking System</span>
                    <h2 className="card__title">
                        CV, Python
                    </h2>
                    <button className="card__button" onClick={() => window.location.href = "https://github.com/NityaB24/OpenCV_Mediapipe-Projects/tree/main/Smart%20Parking%20System"}>
                        Github
                    </button>
                </div>
            </article>
            <article className="card__article">
                <img src="/images/Booking.png" alt="" className='card__img'/>
                <div className="card__data">
                    <span className="card__description" >Booking.com Clone </span>
                    <h2 className="card__title">
                        React Js, MongoDB, Postman
                    </h2>
                    <button className="card__button" onClick={() => window.location.href = "https://github.com/NityaB24/Booking.com"}>
                        Github
                    </button>
                </div>
            </article>


        </div>
    </div>
    </div>
    </>
  )
}

export default Hover_project