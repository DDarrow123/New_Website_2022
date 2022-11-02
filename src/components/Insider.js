import React from "react";
import enhanced_story from "../assets/media/enhanced-story-jacques.mp4";
import live_feed from "../assets/media/live-feed-election-example.mp4";
import jacques_boat from "../assets/images/jacques-boat.jpg";
import live_election from "../assets/images/clay-banks-unsplash.jpg";
import berlin_bridge from "../assets/images/eren-goldman-unsplash.jpg";
import stacked_crates from "../assets/images/ruben-bagues-unsplash.jpg";
import travel_hub from "../assets/media/travel-hub.mp4";
import hamburger_menu from "../assets/media/hamburger-menu.mp4";

const Insider = () => {
    return (
      <section className="l-main-content">
        <header className="top-header">
          <div className='top-header__name'>Devon Darrow</div>
        </header>
        <div className="headline-bold intro">Work at <span className="intro-subtext">Insider</span></div>
        <section className="insider">
          <div className="insider-item">
            <video
              className="insider-video" 
              src={enhanced_story} 
              alt="ehanced story video example"
              type="video/mp4"
              controls 
              autostart="false"
            />
            <div className="card-overlay insider-overlay">
                <img
                className="insider-image" 
                src={jacques_boat} 
                alt=""
                />
                <div className="headline-bold insider-title">
                  Enhanced Story Layout and Elements
                </div>
            </div>
          </div>
          <div className="insider-item">
            <video
              className="insider-video" 
              src={live_feed} 
              alt="live election article feed video example"
              type="video/mp4"
              controls 
              autostart="false"
            />
            <div className="card-overlay insider-overlay">
                <img
                className="insider-image" 
                src={live_election} 
                alt=""
                />
                <div className="headline-bold insider-title">
                  Live Election Feed Module
                </div>
            </div>
          </div>
          <div className="insider-item">
          <video
              className="insider-video" 
              src={travel_hub} 
              alt="live election article feed video example"
              type="video/mp4"
              controls 
              autostart="false"
            />
          <div className="card-overlay insider-overlay">
            <img
            className="insider-image" 
            src={berlin_bridge} 
            alt=""
            />
            <div className="headline-bold insider-title">
                Travel Hub
            </div>
          </div>
            
          </div>
          <div className="insider-item">
          <video
              className="insider-video" 
              src={hamburger_menu} 
              alt="live election article feed video example"
              type="video/mp4"
              controls 
              autostart="false"
            />
          <div className="card-overlay insider-overlay">
            <img
            className="insider-image" 
            src={stacked_crates} 
            alt=""
            />
            <div className="headline-bold insider-title">
                Hamburger Menu
            </div>
          </div>
          </div>
        </section>
      </section>
    
    )
};

export default Insider;