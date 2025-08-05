import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Optional: for styling your navbar

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Rooms</Link></li>
        <li><Link to="/dishes">Dishes</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
