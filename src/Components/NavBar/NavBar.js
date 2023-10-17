import React from 'react';
import './NavBar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Company Logo</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
};

export default Navbar;
