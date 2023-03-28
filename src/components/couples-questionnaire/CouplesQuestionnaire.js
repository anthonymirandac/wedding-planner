// CouplesQuestionnaire.js

import React from 'react';
import './CouplesQuestionnaire.css';

const CouplesQuestionnaire = () => {
  return (
    <div className="questionnaire">
      <h1 className="questionnaire-title">Couples Questionnaire</h1>
      <form className="questionnaire-form">
        <div className="gender-select">
        <label>
            <input type="radio" name="gender" value="male" />
            <img src={`${process.env.PUBLIC_URL}/../../../../public/images/male.png`} alt="Male" className="male-icon" />
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            <img src={`${process.env.PUBLIC_URL}/../../../../public/images/Female.png`} alt="Female" className="female-icon" />
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