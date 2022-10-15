import React, { Component } from "react";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import line_img from "../assets/images/line_img.jpg";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";

const lettersArray = ["W", "O", "R", "K"];

class Work extends Component {
  constructor(props) {
    super(props);
    this.letters = [];
    this.tl = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.tl.staggerTo(this.letters, 0.5, { y: 200, autoAlpha: 0.5 }, 0.5);
  }

  render() {
    return (
      <div key={'work'}>
        <header className="App-header">
          <div className="general-btn-container">
            <img
              className="site-btn"
              src={play_icon}
              alt=""
              onClick={() => this.tl.play()}
            />
            <img
              className="site-btn"
              src={pause_icon}
              alt=""
              onClick={() => this.tl.pause()}
            />
            <img
              className="site-btn"
              src={restart_icon}
              alt=""
              onClick={() => this.tl.reverse()}
            />
          </div>
          <h3 className="name-title">
            <img 
              className="welcome-line-img" 
              src={line_img} 
              alt="" />
            Devon Darrow
          </h3>
        </header>
        <div className="work-container">
          <div className="left-work-bar">
            <div className="work-overlay">
              <div className="work-title">
                {lettersArray.map((element, index) => (
                  <div
                    key={element.id}
                    ref={div => (this.letters[index] = div)}
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right-work-bar">
            <div className="right-container">
              <div className="implementation-container">
                  <div className="work-name">
                    <span>1</span> Front-end work at Insider
                    <div className="card card-background">
                      <a
                        href="https://www.businessinsider.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <img
                          className="work-logo" 
                          src={ work_logo } 
                          alt=""
                        /> */}
                      </a>
                    </div>
                  </div>
                  <div className="work-name">
                    {" "}
                    <span>2</span> Festival Site
                    <div className="card">
                      <a
                        href="https://www.devondarrow.com/Example_2/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <img 
                          className="work-image" 
                          src={ festival_img } 
                          alt=""
                        /> */}
                      </a>
                    </div>
                  </div>
                  <div className="work-name">
                    <span>3</span> Gallery Site
                    <div className="card">
                      <a
                        href="https://www.devondarrow.com/Example_3"
                        rel="noopener noreferrer"
                        target="_blank"
                        alt=""
                      >
                        {/* <img 
                          src={ gallery_img }
                          alt="" 
                        /> */}
                      </a>
                    </div>
                  </div>
                  <div className="project-title">
                <div className="project-container">
                <div className="work-name">
                  {" "}
                  <span>...</span> More work coming soon
                </div>
                </div>
                  </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
//https://ddarrow123.github.io/Example_1/index.html
