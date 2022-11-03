import React from "react";
// import "../sass/App.scss";
import BottomNavBar from "../modules/BottomNavBar";
import NavBar from "../modules/NavBar";
import WordCarousel from "../modules/WordCarousel";

const Festival = () => {
  return (
    <>
    <div id="left"></div>
    <div id="top"></div>
    <div className="l-main-content-festival">
      <div>
        <NavBar />
      </div>
      <div>
        <WordCarousel />
      </div>
      <div>
        <BottomNavBar />
      </div>
    </div>
    </>
  );
};

export default Festival;