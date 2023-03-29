// App.js

import React from 'react';
import './App.css';
import LandingPage from './/components/landing-page/LandingPage';
import SignUp from './/components/sign-up/SignUp';
import Gallery from './/components/gallery/Gallery'
import ConfirmationBooking from './/components/confirmation-booking/ConfirmationBooking';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
      <SignUp />
      <Gallery />
      <ConfirmationBooking />
    </div>
  );
}

export default App;
