import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo-box">
          <img className="main-logo" src={logo} alt="My App Logo" />
        </div>
        <h1 className="main-heading">My First App in React.js</h1>
      </div>
    </header>
  );
}

export default Header;
