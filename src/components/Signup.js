import React, { Component } from "react";
import "../App.css";

class Signup extends Component {
  login = () => {
    // alert("login called");
    console.log("state", this.state);
  };
  render() {
    return (
      <div className="wrapper">
        <h1>Register</h1>
        <div className="form">
          <input
            onChange={(e) => {
              this.setState({ phone: e.target.value });
            }}
            type="tel"
            name="phone"
            placeholder="Enter Phone No."
            pattern="[1-9]{1}[0-9]{9}"
            required
          />
          <input
            type="password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            placeholder="Enter Password"
            required
          />
          <label>Address</label>
          <input
            className="Address-columns"
            type="text"
            onChange={(e) => {
              this.setState({ House: e.target.value });
            }}
            placeholder="House No."
            required
          />
          <input
            className="Address-columns"
            type="text"
            onChange={(e) => {
              this.setState({ Block: e.target.value });
            }}
            placeholder="Block"
            required
          />
          <input
            className="Address-columns"
            type="text"
            onChange={(e) => {
              this.setState({ Area: e.target.value });
            }}
            placeholder="Area/Locality"
            required
          />
          <input
            className="Address-columns"
            type="text"
            onChange={(e) => {
              this.setState({ City: e.target.value });
            }}
            placeholder="City"
            required
          />

          <button onClick={() => this.login()}>Register</button>
        </div>
      </div>
    );
  }
}

export default Signup;
