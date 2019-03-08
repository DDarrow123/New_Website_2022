import React, { Component } from "react";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import line_img from "../assets/images/line_img.jpg";
import festival_img from "../assets/images/festival_img.png";
import question_img from "../assets/images/question_img.png";
import beauty_img from "../assets/images/beauty_img.png";
import fashion_lister from "../assets/images/fashion_lister.png";
import fashion_week from "../assets/images/fashion_week.png";
import fright_matic from "../assets/images/fright_matic.png";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";

const lettersArray = ["W", "o", "r", "k"];

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
      <>
        <header className="App-header">
          <div className="general-btn-container">
            <img
              className="site-btn"
              src={play_icon}
              onClick={() => this.tl.play()}
            />
            <img
              className="site-btn"
              src={pause_icon}
              onClick={() => this.tl.pause()}
            />
            <img
              className="site-btn"
              src={restart_icon}
              onClick={() => this.tl.reverse()}
            />
          </div>
          <h3 className="name-title">
            <img className="welcome-line-img" src={line_img} alt="line image" />
            Devon Darrow
          </h3>
        </header>
        <div className="split-page-container">
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
            <div className="implementation-title">
              <div className="implementation-container">
                <div className="work-name">
                  {" "}
                  <span>1</span> Festival Site
                  <div className="card">
                    <a
                      href="https://www.devondarrow.com/Example_2/index.html"
                      target="_blank"
                    >
                      <img className="work-image" src={festival_img} />
                    </a>
                  </div>
                </div>
                <div className="work-name">
                  {" "}
                  <span>2</span> Beauty Site
                  <div className="card">
                    <a
                      href="https://www.devondarrow.com/Example_1/index.html"
                      target="_blank"
                    >
                      <img src={beauty_img} />
                    </a>
                  </div>
                </div>
                <div className="work-name">
                  {" "}
                  <span>3</span> Coming Soon...
                  <div className="card">
                    <div className="works-container">
                      <div className="new-work">
                        <h5>Something new in the works here</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-title">
                <div className="project-container">
                  <div className="work-name">
                    <span>4</span> Fashion Lister
                    <div className="card">
                      <a
                        href="https://github.com/DDarrow123/Fashion_Lister"
                        target="_blank"
                      >
                        <img src={fashion_lister} />
                      </a>
                    </div>
                  </div>
                  <div className="work-name">
                    <span>5</span> Fashion Reviews
                    <div className="card">
                      <a
                        href="https://github.com/DDarrow123/Mod-3-Final-Project-Front-End"
                        target="_blank"
                      >
                        <img src={fashion_week} />
                      </a>
                    </div>
                  </div>
                  <div className="work-name">
                    <span>6</span> Fright-O-Matic
                    <div className="card">
                      <a
                        href="https://github.com/free2580/Fright-O-Matic"
                        target="_blank"
                      >
                        <img src={fright_matic} />
                      </a>
                    </div>
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
//https://ddarrow123.github.io/Example_1/index.html
