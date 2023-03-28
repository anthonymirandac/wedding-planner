// App.js

import React from 'react';
import './App.css';
import LandingPage from './/components/landing-page/LandingPage';
import SignUp from './/components/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SignUp />
    </div>
  );
}

export default App;
