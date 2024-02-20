const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const ERROR_FETCH = "It didn't work!";



fetchMyIP((error, ip) => {
  if (error) {
    console.log(ERROR_FETCH , error);
    return;
  }

  console.log('ip fetched:' , ip);

  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      console.log(ERROR_FETCH , error);
      return;
    }
    console.log('co-ords fetched:', data);
  });
});