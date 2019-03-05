import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";
import tall_flower_img from "../assets/images/tall_flower_img.jpg";

class Contact extends Component {
  state = {
    userName: "",
    userEmail: "",
    category: "-",
    message: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    alert("Message was submitted: " + this.state);
  };

  render() {
    return (
      <>
        <header className="App-header">
          <h3 className="name-title">
            <img className="welcome-line-img" src={line_img} alt="line image" />
            Devon Darrow
          </h3>
        </header>
        <div className="contact-container">
          <div className="left-contact-bar">
            <div className="contact-title">CONTACT</div>
          </div>
          <div className="right-contact-bar">
            <form
              method="post"
              action="https://formspree.io/ddarrow.work@gmail.com"
              onSubmit={this.handleSubmit}
            >
              <div className="fields">
                <div className="transparent-background" />
                <h3 className="form-greeting">Say hello!</h3>
                <div className="field half">
                  <label>
                    <input
                      placeholder="your name"
                      className="user-input"
                      name="userName"
                      type="text"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="field half">
                  <label>
                    <input
                      placeholder="your email"
                      className="user-input"
                      name="userEmail"
                      type="email"
                      value={this.state.userEmail}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="field">
                  <label className="inquiry-label">
                    <select
                      className="select-tag"
                      name="category"
                      value={this.state.Category}
                      onChange={this.handleInputChange}
                    >
                      <option value="">-</option>
                      <option value="freelance inquiry">
                        Freelance Inquiry
                      </option>
                      <option value="general inquiry">General Inquiry</option>
                    </select>
                  </label>
                </div>
                <div className="field">
                  <label>
                    <textarea
                      placeholder="write a message here"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      rows="8"
                      cols="40"
                    />
                  </label>
                </div>

                <div className="actions">
                  <input
                    type="submit"
                    className="action-btn submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;

// <div>
//   <img
//     className="tall-flwr-img"
//     src={tall_flower_img}
//     alt="tall flower image"
//   />
// </div>
