import React from 'react';
import './contact.css'; // Import your CSS file for styling
import Facebook from "../Images/facebook.png";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Phone:</strong>99999999999</p>
        <p><strong>Email:</strong> meatpark.com@gmail.com</p>
        <p><strong>Address:</strong> Kupondole,Kathmandu, Bagmati</p>
        <p><strong>Operating Hours:</strong> Monday-Sunday, 8:00 AM - 10:00 PM</p>
      </div>
      <div className="contact-form">
        <h3>Send us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map">
        <img src='{Facebook}' alt='logo'></img><br></br>
  <a href="https://www.facebook.com/profile.php?id=61557226165011&sk=about" target="_blank" rel="noopener noreferrer">Visit our Facebook Profile</a>
</div>


    </div>
  );
}

export default Contact;
