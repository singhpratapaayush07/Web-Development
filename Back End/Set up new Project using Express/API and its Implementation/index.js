///Below are 15 steps for fetching API data from other server to our server and
//reflect the data in our web application

//For running this Web Application: After below 15 steps are done write commands given at the last of this file (Step 16 &17)

// Pre-requistes:
// After getting in this directory(folder), In teminal some modules should be installed already by entering following commands:
// i) npm init --yes
// ii) npm install express
// iii) npm install body-parser


//1. install express
const express= require("express");

// 9. Used for get Requests from other Servers
const http= require("http");

//7. Used to read data from index.html's form data
const bodyParser=require("body-parser");

//2. initializing app by express
const app= express();

app.use(bodyParser.urlencoded({extended:true}));

//4. handling get Request for home Route
app.get("/",function(req,res){

  //5.sending index.html file on landing page
  res.sendFile(__dirname+"/index.html");

});

//6.Handling post request coming when button is pressed in inde.html
app.post("/",function(req,res){

  //8.Reading html's form data by .body
  const cityName=req.body.city;

  //9. Getting API url
  const url="http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8fa1cee3851c517baecbb77adb00cb4c&units=metric";

  //10. implementing get request of API with the help of http module and getting "response"
  http.get(url,function(response){
    //11. Fetching response's data
    response.on("data",function(data){

      //12. converting hexadecimal data to Json format data
      const weatherData=JSON.parse(data);

      //13. Accessing values returned in API
      const temp=weatherData.main.temp;
      const weaherDescription= weatherData.weather[0].description;
      const icon=weatherData.weather[0].icon;

      const imageUrl= "http://openweathermap.org/img/wn/"+ icon + "@2x.png";

      //14. Writing the API's fetched data that we want to show
      res.write("<p>Today's weather is a bit " + weaherDescription + "</p>");
      res.write("<h1> Temperature in "+ cityName + " is " + temp + "</h1>");
      res.write("<img src=" + imageUrl + ">");

      //15. Finally sending the obtained data whenever a post request(i.e. whnever button is pressed) is made from index.htm
      res.send();
    });

  });



});


//3. Making the server run on port 3000
app.listen(3000,function(){
  console.log("Server running on port 3000");

});

//16. Run by entering this Command on terminal:
//    nodemon index.js

//17. On chrome's URl type: localhost:3000
