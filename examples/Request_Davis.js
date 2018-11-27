var request = require('request');
var fs = require('fs');
//Output data into csv
/*
fs.open('C:/Node/westernweather.csv', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
*/



var options = {
    url: "https://api.weatherlink.com/v1/NoaaExt.json?user=001D0A00FB6C&pass=dirtguys1&apiToken=5F248CCBB9584CD18FD326DC60450256",
    method: "GET",
    headers: {
    }
};


request(options, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log(body);
    var weatherdata = JSON.parse(body);
    console.log(body);
    console.log(weatherdata);
    console.log(Object.keys(weatherdata));
    var keys = Object.keys(weatherdata);
    var values = Object.values(weatherdata);
    for (var i = 0; i < keys.length; i++){
        console.log(keys[i] + " : " +values[i]);
    }
    //var count = Object.keys(weatherdata).length;

    //console.log(count);
    /*
    console.log(Object.keys(weatherdata));
    console.log(Object.values(weatherdata));


    console.log(Object.keys(weatherdata[0].values));

    var weatherkeys = Object.keys(weatherdata[0].values);
    //var weathervalues = Object.values(weatherdata[0].values);
    var title = new String();
    var title = "Date" + ",";
    
    //Loop through title
    for (var i = 0; i < weatherkeys.length; i++){
        if(i < weatherkeys.length - 1){
            title += weatherkeys[i] + ',';
        } else { 
            title += weatherkeys[i] + '\n';
        }
    }
    console.log(title);
    fs.appendFile("C:/Node/westernweather.csv", title, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


    //console.log(typeof weatherdata);
    for (var i = 0; i < weatherdata.length; i++){
        //console.log(weatherdata[i].values);
        //Loop through weather values
        var wdata = new String();
        var wdata = weatherdata[i].date + ",";
        var weathervalues = Object.values(weatherdata[i].values);
        //console.log(weathervalues)
        for (var j = 0; j < weathervalues.length; j++){
            if(j < weathervalues.length - 1){
                wdata += weathervalues[j] + ',';
            } else { 
                wdata += weathervalues[j] + '\n';
            }
        }
        console.log(wdata);
        fs.appendFile("C:/Node/westernweather.csv", wdata, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    */
});



