import React, { Component } from "react";
import { TweenMax, Elastic, TimelineMax } from "gsap";
import noun_circle from "../assets/images/noun_circle.svg";
import { bubble as Menu } from "react-burger-menu";

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

  //  handleStateChange (state) {
  //   this.setState({menuOpen: state.isOpen})
  // }

  // closeMenu() {
  //   this.setState({ menuOpen: false });
  // }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div>
        <Menu isOpen={this.state.menuOpen} onClick={() => this.toggleMenu()}>
          <a id="home" className="menu-item" href="/">
            HOME
          </a>
          <a id="about" className="menu-item" href="/about">
            ABOUT
          </a>
          <a id="contact" className="menu-item" href="/contact">
            CONTACT
          </a>
          <a id="work" className="menu-item" href="/work">
            WORK
          </a>
        </Menu>
      </div>
    );
  }
}

export default ExpandableMenu;
//Circle by Qi studio from the Noun Project
// <div className="menu">
//   <img src={noun_circle} alt="menu circle icon" />
// </div>

// <a onClick={this.showSettings} className="menu-item--small" href="">
//   Settings
// </a>

// customBurgerIcon={<img src={noun_circle} alt="menu circle icon" />}
