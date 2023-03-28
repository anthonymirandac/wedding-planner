// SignUp.js

import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1 className="sign-up-title">Sign Up</h1>
      <form className="sign-up-form">
        <input type="text" className="sign-up-input" placeholder="Full Name" />
        <input type="email" className="sign-up-input" placeholder="Email Address" />
        <input type="password" className="sign-up-input" placeholder="Password" />
        <input type="password" className="sign-up-input" placeholder="Confirm Password" />
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
