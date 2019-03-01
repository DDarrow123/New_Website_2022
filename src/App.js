import React, { Component } from "react";
import "./assets/App.scss";
import WelcomePage from "./containers/WelcomePage";
import ExpandableMenu from "./containers/ExpandableMenu";
import line_img from "./assets/images/line_img.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpandableMenu />
        <header className="App-header">
          <h3 className="name-title">
            <img className="welcome-line-img" src={line_img} alt="line image" />
            Devon Darrow
          </h3>
        </header>
        <WelcomePage />
      </div>
    );
  }
}

export default App;
