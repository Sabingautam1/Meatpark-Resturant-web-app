import React from 'react';
import './Offers.css'; // Import your CSS file for styling
import OfferImage1 from '../Images/offer.png'; // Import offer images
import OfferImage2 from '../Images/offers2.png';
import OfferImage3 from '../Images/offers3.png';

function Offers() {
  return (
    <div className="offers-container">
      <h2>Special Offers</h2>
      <div className="offer">
        <img src={OfferImage1} alt="Offer 1" className="offer-image" />
        <div className="offer-content">
          <h3>20% Off on Lunch Specials</h3>
          <p>Enjoy 20% off on our delicious lunch specials every Monday to Friday from 11:00 AM to 3:00 PM. Don't miss out!</p>
        </div>
      </div>
      <div className="offer">
        <img src={OfferImage2} alt="Offer 2" className="offer-image" />
        <div className="offer-content">
          <h3>Happy Hour Deals</h3>
          <p>Join us for Happy Hour every day from 4:00 PM to 7:00 PM and enjoy discounted prices on select appetizers and drinks.</p>
        </div>
      </div>
      <div className="offer">
        <img src={OfferImage3} alt="Offer 3" className="offer-image" />
        <div className="offer-content">
          <h3>Weekend Brunch Buffet</h3>
          <p>Indulge in our Weekend Brunch Buffet every Saturday and Sunday from 10:00 AM to 2:00 PM. All-you-can-eat deliciousness!</p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
