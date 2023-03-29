// LandingPage.js

import React from 'react';
import CouplesQuestionnaire from '../couples-questionnaire/CouplesQuestionnaire';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image-container">
        <div className="image-section"></div>
      </div>
      <h1 className="wedding-planner">Wedding Planner</h1>
      <h2 className="plan-your-own-wedding">Plan Your Own Wedding</h2>
      <button className="enter-button" onClick={CouplesQuestionnaire}>
        Enter
      </button>

    </div>
  );
}

export default LandingPage;
