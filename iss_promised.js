const request = require('request-promise-native');


const fetchMyIP = () => request('https://api.ipify.org?format=json');

const fetchCoordsByIP = responseBody => request(`https://ipwho.is/${JSON.parse(responseBody).ip}`);

const fetchISSFlyOverTimes = body => {
  const {latitude, longitude} = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};


const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => JSON.parse(body).response);
};


module.exports = { nextISSTimesForMyLocation };