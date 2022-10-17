import React, { Component } from "react";
import {
  TweenMax,
  Elastic,
  TweenLite,
  TimelineLite,
  CSSPlugin,
  Expo
} from "gsap";
import line_img from "../assets/images/line_img.jpg";
// import tall_flower_img from "../assets/images/tall_flower_img.jpg";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";
import twitter_icon from "../assets/images/twitter_icon.svg";
import insta_icon from "../assets/images/insta_icon.svg";
import github_icon from "../assets/images/github_icon.svg";

class Contact extends Component {
  constructor() {
    super();
    this.loaderWrap = null;
    this.toggleBtn = null;
    this.tl = new TimelineLite({ paused: true });

    this.state = {
      userName: "",
      userEmail: "",
      category: "-",
      message: ""
    };
  }

  // componentDidMount() {
  //   this.tl.to(this.loaderWrap, 1, {
  //     x: "140%",
  //     ease: Expo.easeInOut,
  //     onComplete: () => {
  //       TweenLite.to(this.toggleBtn, 0.2, { autoAlpha: 1 });
  //     }
  //   });
  // }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div key={'contact'}>
        <header className="top-header">
          {/* <div className="general-btn-container">
            <img
              className="site-btn"
              src={play_icon}
              ref={e => (this.toggleBtn = e)}
              onClick={() => this.tl.play()}
            />
            <img
              className="site-btn"
              src={pause_icon}
              ref={e => (this.toggleBtn = e)}
              onClick={() => this.tl.pause()}
            />
            <img
              className="site-btn"
              src={restart_icon}
              ref={e => (this.toggleBtn = e)}
              onClick={() => this.tl.reverse()}
            />
          </div> */}
          <div className='top-header__name'>Devon Darrow</div>
        </header>
        <div className="split-page-container">
          <div className="left-contact-bar">
            {/* <div ref={div => (this.loaderWrap = div)} className="contact-title">
              CONTACT
            </div> */}
          </div>
          <div className="right-contact-bar">
            <div className="contact-title">Contact</div>
            {/* <form
              method="post"
              action="https://formspree.io/ddarrow.work@gmail.com"
              onSubmit={this.handleSubmit}
            >
              <div className="fields">
                <div className="transparent-background" />
                <h3 className="form-greeting">Say hello!</h3>
                <div className="field">
                  <label>
                    <input
                      placeholder="your name"
                      className="user-input"
                      name="userName"
                      type="text"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="field">
                  <label>
                    <input
                      placeholder="your email"
                      className="user-input"
                      name="userEmail"
                      type="email"
                      value={this.state.userEmail}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="field">
                  <label>
                    <textarea
                      placeholder="write a message here"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      rows="8"
                      cols="40"
                    />
                  </label>
                </div>
                <div className="actions">
                  <input
                    type="submit"
                    className="action-btn submit"
                    value="Submit"
                  />
                </div>
                <div className="social-container">
                  <a href="https://twitter.com/devoncdarrow" target="_blank">
                    <img className="twitter-media-btn" src={twitter_icon} />
                  </a>
                  <a
                    href="https://www.instagram.com/devondarrow"
                    target="_blank"
                  >
                    <img className="insta-media-btn" src={insta_icon} />
                  </a>
                  <a href="https://github.com/DDarrow123" target="_blank">
                    <img className="github-media-btn" src={github_icon} />
                  </a>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
