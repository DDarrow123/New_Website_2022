import React, { Component } from "react";
import black_white_img from "../assets/images/black_white_img.jpg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import line_img from "../assets/images/line_img.jpg";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    // this.myTween = TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween = TweenLite.to(this.myElement, 2, {
      rotation: -90,
      transformOrigin: "70% 15%",
      opacity: 0.5
    });
  }

  render() {
    return (
      <>
        <header className="App-header">
          <h3 className="name-title">
            <img className="welcome-line-img" src={line_img} alt="line image" />
            Devon Darrow
          </h3>
        </header>
        <div className="welcome-container">
          <div className="welcome-title">
            <img
              className="welcome-image"
              src={black_white_img}
              alt="flower image"
            />
          </div>
          <p className="tag-line">
            A WEB DEVELOPER CONQUERING THE WORLD ONE PERFECT PIXEL AT A TIME
          </p>
          <h3 ref={div => (this.myElement = div)} className="welcome-sidebar">
            WELCOME
          </h3>
        </div>
      </>
    );
  }
}

export default WelcomePage;

// this.myTween = TweenLite.to(this.myElement, 2, {
// rotation: -90,
// transformOrigin: "40% 15%"
// x: 200
// y: 200
// });
// .to(this.myElement, 0.5, {x: 100})
// .to(this.myElement, 0.5, {y: 100, rotation: 180})
//
