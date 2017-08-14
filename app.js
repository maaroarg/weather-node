const yargs = require('yargs');
const geocode  = require('./geocode/geocode');
const weather  = require('./weather/weather');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
        if (errorMessage){
          console.log(errorMessage);
        } else {
          console.log(`La temperatura actual es ${weatherResults.temp} pero se siente de ${weatherResults.apparentTemp}`);
        }
    });
  }
});
