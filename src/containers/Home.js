import React, { useEffect, useState } from "react";
import bridge from "../assets/images/daniel-verdugo-unsplash.jpg";


const Home = () => {
    return (
        <div className="wrap" id="wrap">
            <header className="top-header">
              <div className='top-header__name'>Devon Darrow</div>
            </header>
            <div className='greeting'></div>
            <div className='home' key={'home'}>
                <div className='home__welcome-info'>
                    <div className='home__name-wrapper'>
                      <img src={bridge} alt='Williamsburg bridge - aka the best view of the city' className='home__image'></img>
                    </div>
                    <div className='home__tagline'>
                        <span className='home__job-type'>Front-end web developer</span>
                        <span className='home__job-location'>NYC <span className='home__divider'></span> PARIS</span>
                    </div>
                </div>
                {/* <div className='home__intro-desktop'>Welcome</div> */}
            </div>
        </div>
    )
}

export default Home;