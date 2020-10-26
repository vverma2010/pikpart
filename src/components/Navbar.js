import React, { Component } from "react";
import "../App.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="logo">&#134;PikPart&#47;&#135;</div>
          <div className="search-container" >
            <img
            className="search-icon"
              src="https://www.flaticon.com/svg/static/icons/svg/711/711319.svg"
              alt="Search"
              height={20}
            />
            <input className="search" placeholder="Search" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
