const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const cityName = req.body.city;
  const apiKey = "a4a407d9dd4f6153b529fe7c65a2322a";
  const units = "metric";
  // This API currently only supports US city names.
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + units;
  https.get(url, function(response){
    console.log(response.statusCode);
    if (response.statusCode != 200) {
      res.send("Please Enter a US city name.");
    }else{
      response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const desc = weatherData.weather[0].description;
        const cityName = weatherData.name;
        const icon = weatherData.weather[0].icon;
        const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        res.write("<h1>The temperature in " + cityName + " is " + temp + " degree celcius.</h1>");
        res.write("<p>The wather is currently " + desc + "</p>");
        res.write("<img src=" + imageUrl+ ">");
        res.send();
      });
    }
  });
});

app.listen(3000, function(){
  console.log("Started on Port 3000");
});
