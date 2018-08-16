require('dotenv').config()
const AmbientWeatherApi = require('../lib/index')

const api = new AmbientWeatherApi({
  apiKey: process.env.AMBIENT_WEATHER_API_KEY || 'e6061001bbfb4e78a9026f7bdc5ef26280b8c3f5c9f64b16adf214a0b179c930',
  applicationKey: process.env.AMBIENT_WEATHER_APPLICATION_KEY || '3dc1f97d39fe4ad98594124a7d1b195d7cd516b8df444aa185b58127487203ec'
})

//Create file output
var fs = require('fs');
fs.open('test.csv', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
fs.appendFile("C:/Node/test.csv", 'date' + ',' + 'tempf' + ',' + 'winddir' +',' +'windspeedmph' + ',' + 'humidity' + ',' + 'feelsLike' + "\n", function (err) {
  if (err) throw err;
  console.log('Saved!');
  });

// list the user's devices
api.userDevices()
.then((devices) => {

  devices.forEach((device) => {
    // fetch the most recent data
    api.deviceData(device.macAddress, {
      limit: 500
    })
    .then((deviceData) => {
      console.log('The 10 most recent temperature reports for ' + device.info.name + ' - ' + device.info.location + ':')
      deviceData.forEach((data) => {
        //console.log(data.date + ' - ' + data.tempf + '°F - ' + data.windspeedmph + ' - ' + data.humidity + ' - ' + data.feelsLike)
        //console.log(typeof data)
        
        //Output weather data into csv
        fs.appendFile("C:/Node/test.csv", data.date + ',' + data.tempf + ',' + data.winddir + ',' + data.windspeedmph + ',' + data.humidity + ',' + data.feelsLike + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
        });

      })
      console.log('---')
    })
  })
})

/*var fs = require('fs');
fs.writeFile("C:/Node/test.csv", data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/