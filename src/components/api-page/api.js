// import React from "react";
// import axios from "axios";
// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://local-business-data.p.rapidapi.com/search',
//   qs: {
//     query: 'Hotels in San Francisco, USA',
//     limit: '20',
//     lat: '37.359428',
//     lng: '-121.925337',
//     zoom: '13',
//     language: 'en',
//     region: 'us'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'da9f223eecmsh2df64a8471b61d2p1d305djsnc532ac13ff0f',
//     'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
//     console.log(response);
// });
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://local-business-data.p.rapidapi.com/search',
  params: {
    query: 'Wedding Venues in London, UK',
    limit: '20',
    lat: '37.359428',
    lng: '-121.925337',
    zoom: '13',
    language: 'en',
    region: 'uk'
  },
  headers: {
    'X-RapidAPI-Key': 'da9f223eecmsh2df64a8471b61d2p1d305djsnc532ac13ff0f',
    'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



// export default api;

// varaiables to access
const form = document.querySelector('form');

// Event Listener for user input

//Fetch required data 

// Show the data provided by the API to the user

