import React, { useEffect, useState } from "react";
import bridge from "../assets/images/daniel-verdugo-unsplash.jpg";


const Home = () => {
    // const [scrollTop, setScrollTop] = useState(0);
    // const wrap = document.querySelector('#wrap');

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (scrollTop > 147) {
    //             wrap.classList.add("fix-search");
    //           } else {
    //             wrap.classList.remove("fix-search");
    //           }
    //     }

    // })

    return (
        <div className="wrap" id="wrap">
            <header class="top-header">
                {/* <span class="menu-icon"></span> */}
                <div className='top-header__name'>Devon Darrow</div>
            </header>
            <div className='greeting'></div>
            <div className='home' key={'home'}>
                <div className='home__welcome-info'>
                    <div className='home__name-wrapper'>
                        {/* <span className='home__name'>Welcome</span> */}
                        <img src={bridge} alt='Williamsburg bridge - aka the best view of the city' className='home__image'></img>
                    </div>
                    <div className='home__tagline'>
                        <span className='home__job-type'>Front-end web developer</span>
                        <span className='home__job-location'>New York <span className='home__divider'></span> Paris</span>
                    </div>
                    {/* <div className='home__social'>Social</div> */}
                    <div className='home__intro-mobile'>Welcome</div>
                </div>
                <div className='home__intro-desktop'>Welcome</div>
            </div>
        </div>
    )
}

export default Home;