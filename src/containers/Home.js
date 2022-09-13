import React from "react";
import bridge from "../assets/images/daniel-verdugo-unsplash.jpg";

const Home = () => {
    return (
        <div className='home'>
            <header className='home__intro'>Welcome</header>
            <div className='home__welcome-info'>
                <div className='home__name-wrapper'>
                    <span className='home__name'>Devon Darrow</span>
                    <img src={bridge} alt='Williamsburg bridge - aka the best view of the city' className='home__image'></img>
                </div>
                <div className='home__tagline'>
                    <span className='home__job-type'>Front-end web developer</span>
                    <span className='home__job-location'>New York | Paris</span>
                </div>
            </div>
        </div>
    )
}

export default Home;