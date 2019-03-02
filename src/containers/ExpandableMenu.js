import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import { TweenMax, Elastic, TimelineMax } from "gsap";
import noun_circle from "../assets/images/noun_circle.svg";
import { bubble as Menu } from "react-burger-menu";
import WelcomePage from "./WelcomePage";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

class ExpandableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  showSettings = event => {
    event.preventDefault();
  };

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <HashRouter>
        <div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <NavLink
              className="menu-item"
              to="/"
              onClick={() => this.closeMenu()}
            >
              Home
            </NavLink>
            <NavLink
              className="menu-item"
              to="/about"
              onClick={() => this.closeMenu()}
            >
              About
            </NavLink>
            <NavLink
              className="menu-item"
              to="/contact"
              onClick={() => this.closeMenu()}
            >
              Contact
            </NavLink>
            <NavLink
              className="menu-item"
              to="/work"
              onClick={() => this.closeMenu()}
            >
              Work
            </NavLink>
          </Menu>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default ExpandableMenu;

// <Switch>
//   // <Route exact path="/" component={WelcomePage} />
//   <Route path="/about" component={About} />
//   <Route path="/contact" component={Contact} />
//   <Route path="/work" component={Work} />
//   // <Redirect to="/" />
// </Switch>
