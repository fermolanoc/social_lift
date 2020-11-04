import React from 'react';

function Header() {
    return (
    <header>
        <div className="header__content">
        <div className="company__name">Social Lift</div>
        <nav>
            <ul>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li>About Us</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav></div>
    </header>);
}

export default Header;