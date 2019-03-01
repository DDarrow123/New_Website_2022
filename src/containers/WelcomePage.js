import React, { Component } from "react";
import filler_img from "../assets/images/filler_img.jpg";
// import flwr_img from "../assets/images/flwr_img.svg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    // this.myElement = null;
  }

  // componentDidMount() {
  //   this.myTween = TweenLite.to(this.myElement, 1, {
  //     x: 100,
  //     y: 100
  //   });
  // }
  render() {
    return (
      <>
        <div className="welcome-container">
          <div className="welcome-title">
            <h3>Welcome</h3>
            <img
              // ref={div => (this.myElement = div)}
              className="welcome-image"
              src={filler_img}
              alt="flower image"
            />
          </div>
          <p className="tag-line">
            A WEB DEVELOPER CONQUERING THE WORLD ONE PERFECT PIXEL AT A TIME
          </p>
        </div>
      </>
    );
  }
}

export default WelcomePage;
