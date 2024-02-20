const { nextISSTimesForMyLocation } = require('./iss');

const ERROR_FETCH = "It didn't work!";



nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    console.log(ERROR_FETCH, error);
    return;
  }

  console.log(flyOverTimes);
});