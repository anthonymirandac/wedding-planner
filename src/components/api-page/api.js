// //import React from "react";
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
    query: 'Wedding Venues  in San Francisco, USA',
    limit: '20',
    lat: '37.359428',
    lng: '-121.925337',
    zoom: '13',
    language: 'en',
    region: 'us'
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