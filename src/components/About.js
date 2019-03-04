import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";
import devon_img from "../assets/images/devon_img.jpg";
import small_flower_img from "../assets/images/small_flower_img.jpg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";

const lettersArray = ["A", "B", "O", "U", "T"];

class About extends Component {
  constructor(props) {
    super(props);
    this.letters = [];
    this.tl = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.tl.staggerTo(this.letters, 0.5, { x: 200, autoAlpha: 1 }, 0.2);
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
        <button className="welcome-btn" onClick={() => this.tl.play()}>
          Play
        </button>
        <button className="welcome-btn" onClick={() => this.tl.pause()}>
          Pause
        </button>
        <button className="welcome-btn" onClick={() => this.tl.restart()}>
          Restart
        </button>
        <div className="about-title">
          <div>
            {lettersArray.map((element, index) => (
              <div key={element.id} ref={div => (this.letters[index] = div)}>
                {element}
              </div>
            ))}
          </div>
        </div>
        <div className="about-container">
          <img
            className="profile-img"
            src={small_flower_img}
            alt="Small flower image"
          />
          <p className="about-para">
            I am a web developer passionate about making dynamic front end
            applications. I discovered web development through a love of Excel
            and exposure to beautiful digital design while at an established
            company with a large ecommerce presence.
            <br />
            <br />
            On my journey with code, I gained experience in JavaScript, React,
            Redux, Ruby, and Ruby on Rails. With my technical skills and drive,
            I am dedicated to representing women in the tech industry at the
            same time as building progressive applications and projects.
          </p>
        </div>
      </>
    );
  }
}

export default About;
