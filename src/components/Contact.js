import React, { Component } from "react";
import { IconContext } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import oculus from "../assets/images/oculus_img.jpg";
import {
  // TweenMax,
  // Elastic,
  // TweenLite,
  TimelineLite,
  // CSSPlugin,
  // Expo
} from "gsap";
// import play_icon from "../assets/images/play_icon.svg";
// import restart_icon from "../assets/images/restart_icon.svg";
// import pause_icon from "../assets/images/pause_icon.svg";

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

  // handleInputChange = event => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
        <div className="contact">
          <div className="contact-wrapper">
            <div className="contact-title">Contact Me</div>
            <div className="contact-image-wrapper">
              <img 
                className="image"
                src={ oculus }
                alt=""
              />
            </div>
            <div className="contact-services">
              <div className="services-wrapper">
                <h2 className="headline-bold">Services</h2>
                <span className="headline">Front-end Web Development</span>
                <span className="headline">Website Revamp</span>
                <span className="headline">Website Consultation</span>
              </div>
              <div className="social-wrapper">
                <a 
                  href="https://twitter.com/devoncdarrow"    
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider 
                    value={{ color: "#000", size: "30px", className: "" }}>
                    <SlSocialTwitter />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.instagram.com/devondarrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider 
                    value={{ color: "#000", size: "30px", className: "" }}>
                    <SiInstagram />
                  </IconContext.Provider>
                </a>
                <a 
                  href="https://github.com/DDarrow123" target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider 
                    value={{ color: "#000", size: "30px", className: "" }}>
                    <SiGithub />
                  </IconContext.Provider>
                </a>
                <a 
                  href="mailto:ddarrowphl@gmail.com?subject=Work Inquiry">
                  <IconContext.Provider 
                    value={{ color: "#000", size: "30px", className: "" }}>
                    <TfiEmail />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
