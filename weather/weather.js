const request = require('request');

const getWeather = (lat,lng,callback) => {
  const url = `https://api.darksky.net/forecast/5681db03c13b5f6c6c3dedabbc318dc5/${lat},${lng}?lang=es&units=si`;
  request({
    url,
    json: true
    }, (error,response,body) =>{
      if(!error && response.statusCode === 200){
        callback(undefined,{
          temp : body.currently.temperature,
          apparentTemp: body.currently.apparentTemperature
        });
      } else {
        callback('Error in the request or Forecast service');
      }
  });
}

module.exports = {
  getWeather
}
