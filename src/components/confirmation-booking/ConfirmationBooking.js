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
        <img
          className="wedding-image"
          src={`${process.env.PUBLIC_URL}/images/wedding.png`}
          alt="Wedding"
        />
          <p className="wedding-location">Location: Marcellus, SC</p>
        </div>
        <p className="booking-link">Booking link</p>
        
        
        <h1>About Us</h1>
        <p1>We are coderillas!!Our goal is to create a website where couples can find wedding venues and book in advanced.
        A single page wedding planner application can be a great choice for couples who want a simple and streamlined way to plan their wedding. Unlike traditional wedding planning services, which may involve multiple pages and complex navigation, a single page application provides all of the necessary information and tools on a single, easy-to-use page.
There are several benefits to using a single page wedding planner application, including:
User-friendly interface: 
        </p1>
      <div>
        <h1>Contact-Us</h1>
        <p1>
        Khatra Ahmed: <a href=" mailto:khatraanhmed@gmail.com">khatraahmend@gmail.com</a>
        </p1>
        <p>
        Albert Moravski: <a href=" mailto:albertmoravsti@gmail.com">AlbertMoravski.com</a>
        </p>
        <p>
        Nishit Joshi: <a href=" mailto:nishitojoshi@gmail.com">nishitojoshi@gmail.com</a>
        </p>
        <p>
        Kelly Serika: <a href=" mailto:kellyserika5@gmail.com">kellyserika5@gmail.com</a>
        </p>
        <p>
          Anthony Miranda: <a href=" mailto:anthonymiranda@gmail.com">anthonymiranda@gmail.com</a>
        </p>

      </div>
    <footer>
      <h1>Copyright(C)2023|Khatra|Kelly|NJ|Albert</h1>
    </footer>
      </div>
    </div>
  );
};

export default ConfirmationBooking;
