import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';
import '../css/media.css';

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__container--logo"><a href="/">Social Lift</a></div>
        <nav>
          <ul>
            <Link to="/social_lift">
              <li>Home</li>
            </Link>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
