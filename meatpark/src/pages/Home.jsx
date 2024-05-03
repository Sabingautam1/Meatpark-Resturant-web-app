import React, { useState } from 'react';
import Background from "../Images/background.png";
import './home.css';

function Home() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      datetime: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform further validation here if needed
      console.log("Reservation Details:");
      console.log("Name: " + formData.name);
      console.log("Email: " + formData.email);
      console.log("Date and Time: " + formData.datetime);
      // Optionally, you can send this data to your server using AJAX to handle the reservation process
  };

  return (
    <div className='container'>
      
      <div className='form-container'>
      <h1>If you want a better place with a good food then you came to the beast place in town "MEATPARK"Here you can get varoius delicious food with good ambionous 
        At center of kathmandu valley kuleshwor where you can get Drinks on MRp price.
      </h1>
        <h1>Welcome to Our Restaurant</h1>
        <p>Make a reservation below:</p>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Your Name:</label>
    <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Your Email:</label>
    <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
  </div>
  <div className="form-group">
    <label htmlFor="datetime">Date and Time:</label>
    <input type="datetime-local" id="datetime" name="datetime" value={formData.datetime} onChange={handleChange} required />
  </div>
  <input type="submit" value="Make Reservation" />
</form>

      </div>
      <div className='image-container'>
        <h3>Please feel free to provide advice</h3>
        <img src={Background} alt='background' />
      </div>
    </div>
  );
}

export default Home;
