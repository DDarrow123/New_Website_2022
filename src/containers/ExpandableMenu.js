import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
import { IconContext } from "react-icons";
import { VscMenu, VscClose } from "react-icons/vsc";
// import { TweenMax, Elastic, TimelineMax } from "gsap";
// import noun_circle from "../assets/images/noun_circle.svg";
import { slide as Menu } from "react-burger-menu";

// To-Do: Fix key issue
const ExpandableMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => {
    const burgerIcon = document.querySelector('.bm-burger-button');
    const body = document.querySelector('body');

    burgerIcon.style = 'z-index: 0';
    body.style = 'overflow: hidden';

    setMenuOpen(true);
  }

  const handleOnClose = () => {
    const burgerIcon = document.querySelector('.bm-burger-button');
    const body = document.querySelector('body');

    burgerIcon.style = 'z-index: 1000';
    body.style = 'overflow: auto';
    
    setMenuOpen(false);
  }

  return (
    <div>
      <Menu
        isOpen={menuOpen}
        onOpen={handleOnOpen}
        onClose={handleOnClose}
        customBurgerIcon={<div>
          <IconContext.Provider
            value={{ color: "#f0380f", className: "react-icon", size: 40 }}
          >
            <VscMenu className="burger-icon" />
          </IconContext.Provider>
        </div>}
        customCrossIcon={
          <div onClick={handleOnClose}>
            <IconContext.Provider
              value={{ color: "#ff0000", className: "react-icon", size: 40 }}
            >
              <VscClose />
            </IconContext.Provider>
          </div>
        }
        className='bm-icon'
      >
        <Link
          id="home"
          className="menu-item"
          to="/"
          key={1}
          onClick={handleOnClose}
        >
          HOME
        </Link>
        <Link
          id="about"
          className="menu-item"
          to="/about"
          key={2}
          onClick={handleOnClose}
        >
          ABOUT
        </Link>
        <Link
          id="work"
          className="menu-item"
          to="/work"
          key={4}
          onClick={handleOnClose}
        >
          WORK
        </Link>
        <Link
          id="contact"
          className="menu-item"
          to="/contact"
          key={3}
          onClick={handleOnClose}
        >
          CONTACT
        </Link>
      </Menu>
    </div>
  );
}

export default ExpandableMenu;
