import React from "react";
import lightening from "../assets/images/lightening.png";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="festival-title">
        <span>One Minimal Festival</span>
        <img
          className="lightening-bolt"
          src={lightening}
          alt=""
        />
      </div>
      <span className="ticket-title">
        <a 
          href="https://minimal-fest.webflow.io/" 
          target="_blank"
          rel="noreferrer"
        >
          Get tickets!
        </a>
      </span>
    </header>
  );
};

export default NavBar;
