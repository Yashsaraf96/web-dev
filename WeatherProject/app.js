const express = require('express');
const https = require('https');
const app = express();

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=a4a407d9dd4f6153b529fe7c65a2322a&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);
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
  });
});

app.listen(3000, function(){
  console.log("Started on Port 3000");
});
