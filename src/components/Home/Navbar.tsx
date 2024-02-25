import React from 'react';
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-menu">
          <div className="bi-list">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
        <div className="navbar-brand">
          <h3 className="navbar-title">Weather Forecast</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
