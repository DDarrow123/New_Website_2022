import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IconContext } from "react-icons";
import { VscMenu, VscClose } from "react-icons/vsc";
// import { TweenMax, Elastic, TimelineMax } from "gsap";
// import noun_circle from "../assets/images/noun_circle.svg";
import { slide as Menu } from "react-burger-menu";
import Home from "./Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

// To-Do: Fix key issue
const ExpandableMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOnOpen = () => {
    const burgerIcon = document.querySelector('.bm-burger-button');
    burgerIcon.style = 'z-index: 0';
    setMenuOpen(true);
    // console.log('burger icon', burgerIcon);
    // console.log('what is the state?', menuOpen);

  }

  const handleOnClose = () => {
    const burgerIcon = document.querySelector('.bm-burger-button');
    burgerIcon.style = 'z-index: 1000';
    setMenuOpen(false);
    // console.log('what is the state?', menuOpen);
  }

  return (
    <Router>
      <div>
        <div>
          <Menu
            isOpen={menuOpen}
            onOpen={handleOnOpen}
            onClose={handleOnClose}
            customBurgerIcon={<div>
              <IconContext.Provider
                value={{ color: "#000", className: "react-icon", size: 40 }}
              >
                <VscMenu />
              </IconContext.Provider>
            </div>}
            customCrossIcon={
              <div onClick={closeMenu}>
                <IconContext.Provider
                  value={{ color: "#ff0000", className: "react-icon", size: 40 }}
                >
                  <VscClose />
                </IconContext.Provider>
              </div>
            }
            className='bm-icon'
          >
            <a
              className="menu-item"
              href="/"
              key={1}
            >
              Home
            </a>
            <a
              className="menu-item"
              href="/about"
              key={2}
            >
              About
            </a>
            <a
              className="menu-item"
              href="/contact"
              key={3}
            >
              Contact
            </a>
            <a
              className="menu-item"
              href="/work"
              key={4}
            >
              Work
            </a>
          </Menu>
        </div>

        <Switch>
          <Route path="/about">
            <About onClick={closeMenu} />
          </Route>
          <Route path="/contact">
            <Contact onClick={closeMenu} />
          </Route>
          <Route path="/work">
            <Work onClick={closeMenu} />
          </Route>
          <Route path="/">
            <Home onClick={closeMenu} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ExpandableMenu;
