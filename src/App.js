// App.js

import React from 'react';
import './App.css';
import LandingPage from './/components/landing-page/LandingPage';
import SignUp from './/components/sign-up/SignUp';
import Gallery from './/components/gallery/Gallery'
import ConfirmationBooking from './/components/confirmation-booking/ConfirmationBooking';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SignUp />
      <Gallery />
      <ConfirmationBooking />
    </div>
  );
}

export default App;
