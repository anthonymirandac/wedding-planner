// App.js

import React from 'react';
import './App.css';
import LandingPage from './/components/landing-page/LandingPage';
import SignUp from './/components/sign-up/SignUp';
import Gallery from './/components/gallery/Gallery'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SignUp />
      <Gallery />
    </div>
  );
}

export default App;
