import React, { Component } from "react";
import filler_img from "../assets/images/filler_img.jpg";
// import flwr_img from "../assets/images/flwr_img.svg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    // this.myTween = TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween = TweenLite.to(this.myElement, 2, {
      rotation: -90,
      transformOrigin: "50% 10%",
      opacity: 0.5
      // ease: 3
    });
  }

  render() {
    return (
      <>
        <div className="welcome-container">
          <div className="welcome-title">
            <img
              className="welcome-image"
              src={filler_img}
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
