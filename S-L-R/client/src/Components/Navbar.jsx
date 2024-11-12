import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar" >
            <Link className="navbar-brand" to="/">
                <img src="images/logo.png" alt="CineScope Logo" className="logo" />
                <span className="website-title">CineScope</span>
            </Link>
            <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/wishlist" className="nav-link">Wishlist</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/setting" className="nav-link">Setting</Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
}

export default Navbar;
