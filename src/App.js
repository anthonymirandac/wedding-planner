// App.js

import React from 'react';
import './App.css';
import LandingPage from './/components/landing-page/LandingPage';
import CouplesQuestionnaire from './/components/couples-questionnaire/CouplesQuestionnaire';
import Gallery from './/components/gallery/Gallery';
import ConfirmationBooking from './/components/confirmation-booking/ConfirmationBooking';


function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f60ea775aemshfa16373cb9354f5p10df1djsn7f5037b1dce2',
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    }
  };
  
  fetch('https://local-business-data.p.rapidapi.com/search?query=Wedding%20Venues%20in%20London%2C%20UK&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=uk', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="App">
      <LandingPage />
      <CouplesQuestionnaire />
      <Gallery />
      <ConfirmationBooking />
    </div>
  );
}

export default App;
