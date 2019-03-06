import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";
import festival_img from "../assets/images/festival_img.png";
import question_img from "../assets/images/question_img.png";
import beauty_img from "../assets/images/beauty_img.png";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";

class Work extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <div className="about-btn-container">
            <img
              className="about-btn"
              src={play_icon}
              onClick={() => this.tl.play()}
            />
            <img
              className="about-btn"
              src={pause_icon}
              onClick={() => this.tl.pause()}
            />
            <img
              className="about-btn"
              src={restart_icon}
              onClick={() => this.tl.reverse()}
            />
          </div>
          <h3 className="name-title">
            <img className="welcome-line-img" src={line_img} alt="line image" />
            Devon Darrow
          </h3>
        </header>
        <div className="contact-container">
          <div className="left-work-bar">
            <div className="work-overlay">
              <h1 className="work-title">Work</h1>
            </div>
          </div>
          <div className="right-work-bar">
            <div className="implementation-title">
              Implementations
              <div className="implementation-container">
                <div className="card">
                  <a href="#">
                    <img className="work-image" src={festival_img} />
                  </a>
                </div>
                <div className="card">
                  <a href="#">
                    <img src={beauty_img} />
                  </a>
                </div>
                <div className="card">
                  <div className="works-container">
                    <h4 className="new-work">Something new in the works...</h4>
                  </div>
                </div>
              </div>
              <div className="project-title">
                Projects
                <div className="project-container">
                  <div className="card">
                    <img src={null} />
                  </div>
                  <div className="card">
                    <img src={null} />
                  </div>
                  <div className="card">
                    <img src={null} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Work;
