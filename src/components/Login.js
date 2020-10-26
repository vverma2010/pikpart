import React, { Component } from "react";

class Login extends Component {
  login = () => {
    fetch("http://127.0.0.1:8000/api/login");
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Login</h1>
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

          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
