import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IconContext } from "react-icons";
import { VscMenu } from "react-icons/vsc";
// import { TweenMax, Elastic, TimelineMax } from "gsap";
// import noun_circle from "../assets/images/noun_circle.svg";
import { slide as Menu } from "react-burger-menu";
import Home from "./Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

const ExpandableMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleStateChange = () => {
    setMenuOpen(true);
    console.log('after open:', menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    console.log('after close:', menuOpen);
  };

  console.log(menuOpen);
  return (
    <Router>
      <div>
        <div>
          <Menu
            isOpen={menuOpen}
            onStateChange={handleStateChange}
            customBurgerIcon={<div>
              <IconContext.Provider
                value={{ color: "#000000", className: "react-icon", size: 60 }}
              >
                <VscMenu />
              </IconContext.Provider>
            </div>}
            className='bm-icon'
          >
            <Link
              className="menu-item"
              to="/"
              onClose={closeMenu}
              key={1}
            >
              Home
            </Link>
            <Link
              className="menu-item"
              to="/about"
              onClose={closeMenu}
              key={2}
            >
              About
            </Link>
            <Link
              className="menu-item"
              to="/contact"
              onClose={closeMenu}
              key={3}
            >
              Contact
            </Link>
            <Link
              className="menu-item"
              to="/work"
              onClose={closeMenu}
              key={4}
            >
              Work
            </Link>
          </Menu>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ExpandableMenu;
