// //API forecast.io 5681db03c13b5f6c6c3dedabbc318dc5
//
// const yargs = require('yargs');
// const geocode  = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a:{
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results,undefined,2))
//   }
// });

const request = require('request');
request({
  url :'https://api.darksky.net/forecast/5681db03c13b5f6c6c3dedabbc318dc5/-34.6344928, -58.4119485?lang=es&units=si',
  json: true
}, (error,response,body) =>{

  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  } else {
    console.log('Error in the request or Forecast service');
  }

});
