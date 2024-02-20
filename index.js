const { nextISSTimesForMyLocation } = require('./iss');

const ERROR_FETCH = "It didn't work!";



nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    console.log(ERROR_FETCH, error);
    return;
  }
  // loop over results/output
  console.log("Upcoming ISS fly over times at your location:");
  flyOverTimes.forEach((pass) => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    // not sure why 2 spaces needed
    console.log(`🛰️  ${datetime} for ⌚ ${duration} seconds!`);
  });


});