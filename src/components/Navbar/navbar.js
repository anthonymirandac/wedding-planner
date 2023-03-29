import React from 'react';
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a className = "Navbar1" href="#">Home</a></li>
        <li><a className = "Navbar2" href="#">About</a></li>
        <li><a className = "Navbar3" href="#">Services</a></li>
        <li><a className = "Navbar4" href="#">Contact</a></li>
        <li>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
