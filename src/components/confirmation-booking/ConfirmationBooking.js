import React from 'react';
import './ConfirmationBooking.css';

const ConfirmationBooking = () => {
  return (
    <div className="confirmation-booking">
      <div className="confirmation-container">
        <h1 className="wedding-title">Sharon's &amp; David's Wedding</h1>
        <p className="wedding-date">Tuesday 10th, October 2023</p>
        <div className="wedding-details">
          <p className="wedding-theme">Wedding Theme: Rustic Elegance</p>
          <p className="wedding-location">Location: Marcellus, SC</p>
        </div>
        <img
          className="wedding-image"
          src={`${process.env.PUBLIC_URL}/images/wedding.png`}
          alt="Wedding"
        />
        <p className="booking-link">Booking link</p>
      </div>
    </div>
  );
};

export default ConfirmationBooking;
