import React, { Component } from "react";
import line_img from "../assets/images/line_img.jpg";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    category: "-",
    message: ""
  };

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    alert("Message was submitted: " + this.state.value);
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
                <div className="field half">
                  <label>
                    Name
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="field half">
                  <label>
                    Email
                    <input type="email" />
                  </label>
                </div>
                <div className="field">
                  <label>
                    Category
                    <select name="selection-category" id="selection-category">
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
                    Message
                    <textarea
                      value={this.state.value}
                      onChange={this.handleInputChange}
                      rows="5"
                    />
                  </label>
                </div>
              </div>
              <div className="actions">
                <input type="submit" className="button submit" value="Submit" />
                <input type="reset" value="Reset" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
