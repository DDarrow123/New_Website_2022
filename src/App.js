import React, { Component } from "react";
import "./assets/App.scss";
import ExpandableMenu from "./containers/ExpandableMenu";
import line_img from "./assets/images/line_img.jpg";
import { Router, Link } from "@reach/router";

class App extends Component {
  render() {
    return (
      <>
        <ExpandableMenu />
      </>
    );
  }
}

export default App;
