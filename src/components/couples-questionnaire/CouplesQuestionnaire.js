// CouplesQuestionnaire.js

import React from 'react';
import './CouplesQuestionnaire.css';
import Female from './Female.png';
import Male from './Male.png';

const CouplesQuestionnaire = () => {
  return (
    <div className="questionnaire">
      <h1 className="questionnaire-title">Couples Questionnaire</h1>
      <form className="questionnaire-form">
        <div className="gender-select">
        <label>
            <input type="radio" name="gender" value="male" />
            <img src={Male} alt="Male icon" className="male-icon" />
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            <img src={Female} alt="Female icon" className="female-icon" />
          </label>        </div>
        <input type="text" className="questionnaire-input" placeholder="Couple's Name" />
        <input type="text" className="questionnaire-input" placeholder="Wedding Theme" />
        <input type="text" className="questionnaire-input" placeholder="Wedding Location" />
        <input type="date" className="questionnaire-input" placeholder="Wedding Date" />
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CouplesQuestionnaire;