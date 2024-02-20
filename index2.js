

const {nextISSTimesForMyLocation} = require('./iss_promised');
const printFlyOverTimes = require('./printFlyOverTimes');



nextISSTimesForMyLocation()
  .then((flyOverTimes) => {
    printFlyOverTimes(flyOverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });