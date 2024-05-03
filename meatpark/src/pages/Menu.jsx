import React, { useState } from 'react';
import "./menu.css";
import ItemImage from '../Images/item.png';
import ItemImage1 from '../Images/item2.png';
import ItemImage2 from '../Images/item3.png';
import MenuImage1 from '../Images/menu.png'; // Import menu images
import MenuImage2 from '../Images/menu1.png';
import MenuImage3 from '../Images/menu3.png';
import MenuImage4 from '../Images/menu4.png';
import MenuImage5 from '../Images/menu5.png';

function Menu({ addToCart }) {
  // State to store selected items in the cart
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="menu-container">
      <h2>Special Items</h2>
      <div className="special-items">
        {/* Special Item 1 */}
        <div className="special-item">
          <img src={ItemImage} alt="Item 1" className="item-image" />
          <h3>Special Item 1</h3>
          <p>Description of Special Item 1</p>
          <p>Price: $5.99</p>
          <button onClick={() => addToCart("Special Item 1", 5.99)}>Add to Cart</button>
        </div>
        {/* Special Item 2 */}
        <div className="special-item">
          <img src={ItemImage1} alt="Item 2" className="item-image" />
          <h3>Special Item 2</h3>
          <p>Description of Special Item 2</p>
          <p>Price: $6.99</p>
          <button onClick={() => addToCart("Special Item 2", 6.99)}>Add to Cart</button>
        </div>
        {/* Special Item 3 */}
        <div className="special-item">
          <img src={ItemImage2} alt="Item 3" className="item-image" />
          <h3>Special Item 3</h3>
          <p>Description of Special Item 3</p>
          <p>Price: $7.99</p>
          <button onClick={() => addToCart("Special Item 3", 7.99)}>Add to Cart</button>
        </div>
      </div>

      <h2>Our Menu</h2>
      <div className="menu-items">
        {/* Menu Item 1 */}
        <div className="menu-item">
          <img src={MenuImage1} alt="Menu Item 1" className="menu-image" />
          <div className="menu-item-info">
            <h3>Menu Item 1</h3>
            <p>Description of Menu Item 1</p>
          </div>
          <div className="cart-button">
            <button onClick={() => addToCart("Menu Item 1", 8.99)}>Add to Cart</button>
          </div>
        </div>
        {/* Menu Item 2 */}
        <div className="menu-item">
          <img src={MenuImage2} alt="Menu Item 2" className="menu-image" />
          <div className="menu-item-info">
            <h3>Menu Item 2</h3>
            <p>Description of Menu Item 2</p>
          </div>
          <div className="cart-button">
            <button onClick={() => addToCart("Menu Item 2", 9.99)}>Add to Cart</button>
          </div>
        </div>
        {/* Menu Item 3 */}
        <div className="menu-item">
          <img src={MenuImage3} alt="Menu Item 3" className="menu-image" />
          <div className="menu-item-info">
            <h3>Menu Item 3</h3>
            <p>Description of Menu Item 3</p>
          </div>
          <div className="cart-button">
            <button onClick={() => addToCart("Menu Item 3", 10.99)}>Add to Cart</button>
          </div>
        </div>
        {/* Menu Item 4 */}
        <div className="menu-item">
          <img src={MenuImage4} alt="Menu Item 4" className="menu-image" />
          <div className="menu-item-info">
            <h3>Menu Item 4</h3>
            <p>Description of Menu Item 4</p>
          </div>
          <div className="cart-button">
            <button onClick={() => addToCart("Menu Item 4", 11.99)}>Add to Cart</button>
          </div>
        </div>
        {/* Menu Item 5 */}
        <div className="menu-item">
          <img src={MenuImage5} alt="Menu Item 5" className="menu-image" />
          <div className="menu-item-info">
            <h3>Menu Item 5</h3>
            <p>Description of Menu Item 5</p>
          </div>
          <div className="cart-button">
            <button onClick={() => addToCart("Menu Item 5", 12.99)}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Display the cart items */}
      <div className="cart">
        <h2>Delivery Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Menu;
