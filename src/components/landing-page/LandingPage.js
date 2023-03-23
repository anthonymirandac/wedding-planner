// LandingPage.js

import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image-section"></div>
      <h1 className="wedding-planner">Wedding Planner</h1>
      <h2 className="plan-your-own-wedding">Plan Your Own Wedding</h2>
      <button className="enter-button" onClick={() => console.log('Enter button clicked')}>
        Enter
      </button>
    </div>
  );
}

export default LandingPage;
