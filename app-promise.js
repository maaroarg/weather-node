/*
* Version Promise del ejemplo de la app del clima
*/

const yargs = require('yargs');
const axios = require('axios'); //Libreria http que devuelve promesas

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

  const encodedAddress = encodeURIComponent(argv.address);
  const gecodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(gecodeUrl).then((response)=>{

    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to find that address');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/5681db03c13b5f6c6c3dedabbc318dc5/${lat},${lng}?lang=es&units=si`;

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);

  }).then((response) => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature =  response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

  }).catch((e)=>{

    if(e.code==='ENOTFOUND'){
      console.log('Unable to connect to Google Maps servers');
    }
    else{
        console.log(e);
    }

  });
