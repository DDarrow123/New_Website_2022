import React, { Component } from "react";
import black_white_img from "../assets/images/black_white_img.jpg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import line_img from "../assets/images/line_img.jpg";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    // this.myElement = null;
    this.logoContainer = null;
    this.logoTween = null;
  }

  componentDidMount() {
    this.logoTween = new TimelineLite({ paused: true })
      .to(this.logoContainer, 2, { x: 200 })
      .to(this.logoContainer, 1, {
        rotation: 90,
        transformOrigin: "5% 15%",
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
        <div className="welcome-btn-container">
          <button className="welcome-btn" onClick={() => this.logoTween.play()}>
            Play
          </button>
          <button
            className="welcome-btn"
            onClick={() => this.logoTween.restart()}
          >
            Restart
          </button>
        </div>
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
          <div
            ref={div => (this.logoContainer = div)}
            className="welcome-sidebar"
          >
            WELCOME
          </div>
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
// this.myTween = TweenLite.to(this.myElement, 2, {
//   rotation: -90,
//   transformOrigin: "70% 15%",
//   opacity: 0.5
// });
// ref={div => (this.myElement = div)}
