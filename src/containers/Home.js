import React, { useState } from "react";
import bridge from "../assets/images/daniel-verdugo-unsplash.jpg";

const Home = () => {
    return (
        <div className='home'>
            <header className='home__intro'>Welcome</header>
            <div className='home__name-wrapper'>
                <span className='home__name'>DEVON DARROW</span>
                <img src={bridge} alt='Williamsburg bridge' className='home__image'></img>
            </div>
            <div className='home__tagline'><span className='home__job-type'>Front-end web developer</span></div>
        </div>
    )
}

export default Home;