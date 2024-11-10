"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/navbar.css"; // Import custom CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          <Link href="/" className="menu-link">Home</Link>
          <Link href="/about" className="menu-link">About</Link>
          <Link href="/contact" className="menu-link">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-button">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-mobile">
          <Link href="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
