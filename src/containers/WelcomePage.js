import React, { Component } from "react";
import black_white_img from "../assets/images/black_white_img.jpg";
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import line_img from "../assets/images/line_img.jpg";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";

// const WelcomePage = () => {
//   [logoContainer]
//   constructor(props) {
//     super(props);
//     this.logoContainer = null;
//     this.logoTween = null;
//   }

//   componentDidMount() {
//     this.logoTween = new TimelineLite({ paused: true })
//       .to(this.logoContainer, 1, { y: 140 })
//       .to(this.logoContainer, 1, {
//         rotation: 90,
//         transformOrigin: "center 30%",
//         color: "#7f071d"
//       });
//   }

//   return (
//     <>
//       <header className="App-header">
//         <div className="general-btn-container">
//           <img
//             className="site-btn"
//             src={play_icon}
//             onClick={() => this.logoTween.play()}
//           />
//           <img
//             className="site-btn"
//             src={pause_icon}
//             onClick={() => this.logoTween.pause()}
//           />
//           <img
//             className="site-btn"
//             src={restart_icon}
//             onClick={() => this.logoTween.reverse()}
//           />
//         </div>
//         <h3 className="name-title">
//           <img className="welcome-line-img" src={line_img} alt="line image" />
//           Devon Darrow
//         </h3>
//       </header>

//       <div className="welcome-container">
//         <div className="welcome-title">
//           <img
//             className="welcome-image"
//             src={black_white_img}
//             alt="flower image"
//           />
//         </div>
//         <p className="tag-line">
//           <span>
//             A WEB DEVELOPER CONQUERING THE WORLD ONE PERFECT PIXEL AT A TIME
//           </span>
//         </p>
//         <div
//           ref={div => (this.logoContainer = div)}
//           className="welcome-sidebar"
//         >
//           WELCOME
//         </div>
//       </div>
//     </>
//   );
// }

// export default WelcomePage;
