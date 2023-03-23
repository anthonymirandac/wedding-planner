// LandingPage.js

import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image-section"></div>
      <button className="enter-button" onClick={() => console.log('Enter button clicked')}>
        Enter
      </button>
    </div>
  );
}

export default LandingPage;
