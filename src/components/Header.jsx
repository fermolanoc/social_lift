import React from "react";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__container--logo">Social Lift</div>
        <nav>
          <ul>
            <li>
              <a href="http://localhost:3000/">Home</a>
            </li>
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
