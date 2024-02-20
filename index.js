const { nextISSTimesForMyLocation } = require('./iss');
const printFlyOverTimes = require('./printFlyOverTimes');

const ERROR_FETCH = "It didn't work!";



nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    console.log(ERROR_FETCH, error);
    return;
  }
  // loop over results/output
  printFlyOverTimes(flyOverTimes);


});
