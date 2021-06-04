import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/save">Save</Link>
          </li>
          <li>
            <Link to="/diet-list">Diet List</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;