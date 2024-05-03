import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import CartIcon from '../Images/basket.png'; // Assuming you have a cart icon image
import './navbar.css'; // Import your CSS file

function Navbar({ addToCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt='logo' className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
      <div className="cart" onClick={toggleCart}>
        <img src={CartIcon} alt='Cart' className="cart-icon" />
        {isCartOpen && (
          <div className="cart-content">
            {/* Cart content goes here */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
