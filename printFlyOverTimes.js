const printFlyOverTimes = (flyOverTimes) => {
  console.log("Upcoming ISS fly over times at your location:");
  flyOverTimes.forEach((pass) => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`🛰️  ${datetime} for ⌚ ${duration} seconds!`);
  });
};

module.exports = printFlyOverTimes;