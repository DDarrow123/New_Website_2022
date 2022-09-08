import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { TweenMax, Elastic, TimelineMax } from "gsap";
// import noun_circle from "../assets/images/noun_circle.svg";
import { slide as Menu } from "react-burger-menu";
import Home from "./Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

const ExpandableMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);

  // const handleStateChange = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div>
        <div>
          <Menu
          // menuOpen={menuOpen}
          // onOpen={toggleMenu}
          >
            <Link
              className="menu-item"
              to="/"
            // onClose={toggleMenu}
            >
              Home
            </Link>
            <Link
              className="menu-item"
              to="/about"
            // onClose={toggleMenu}
            >
              About
            </Link>
            <Link
              className="menu-item"
              to="/contact"
            // onClose={toggleMenu}
            >
              Contact
            </Link>
            <Link
              className="menu-item"
              to="/work"
            // onClose={toggleMenu}
            >
              Work
            </Link>
          </Menu>
        </div>

        <Switch>
          {/* <Route path="/">
            <Welcome />
          </Route> */}
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
