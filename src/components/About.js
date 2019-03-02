import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";

const About = () => {
  return (
    <>
      <header className="App-header">
        <h3 className="name-title">
          <img className="welcome-line-img" src={line_img} alt="line image" />
          Devon Darrow
        </h3>
      </header>
      <div className="about-div">About Me!</div>
      <p>TESTING</p>
    </>
  );
};

export default About;
