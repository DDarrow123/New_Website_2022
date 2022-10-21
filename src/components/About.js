import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";
import devon_img from "../assets/images/devon_img.jpg";
import small_flower_img from "../assets/images/small_flower_img.jpg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";

const lettersArray = ["A", "B", "O", "U", "T"];

class About extends Component {
  constructor(props) {
    super(props);
    this.letters = [];
    this.tl = new TimelineLite({ paused: true });

    console.log('what is this?', this);
  }


  componentDidMount() {
    this.tl.staggerTo(this.letters, 0.5, { y: 250, autoAlpha: 0.7 }, 0.2);
    //0.2 in this case is the delay between each letter animation
  }

  render() {
    return (
      <div key={'about'}>
        <header className="App-header top-header">
          <div className="general-btn-container">
            <img
              className="site-btn"
              src={play_icon}
              onClick={() => this.tl.play()}
              alt=""
            />
            <img
              className="site-btn"
              src={pause_icon}
              onClick={() => this.tl.pause()}
              alt=""
            />
            <img
              className="site-btn"
              src={restart_icon}
              onClick={() => this.tl.reverse()}
              alt=""
            />
          </div>
          <div className='top-header__name'>Devon Darrow</div>
        </header>
        <div className="about-wrapper">
          <div className="about-content">
           <div className="about-image-wrapper">
            <div className="about-title">
              {lettersArray.map((element, index) => (
                <div key={element.id} ref={div => (this.letters[index] = div)}>
                  {element}
                </div>
              ))}
            </div>
            <img
              className="profile-img"
              src={devon_img}
              alt=""
            />
           </div>
           <div className="about-para">
                <div className="about-para-wrapper">
                  <span className="highlight">A web developer</span> passionate about making dynamic, beautiful front-end
                  applications and features. J'aime beaucoup digital design, art, fasion, travel & media.
                  <br />
                  <br />
                   Resident of NYC the last 6 years
                  <br />
                  <br />
                  Currently chasing new adventures in glorious Paris with mon petit chien Raf et mon fiancé Charles 
                </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
