const express= require("express");


const app = express();

//Setting up View Engine (looks for views folder to get ejs files)
app.set("view engine","ejs");

//To make use of external files like css, photos etc
app.use(express.static("public"));

var day="Monday";

//Home Route
app.get("/",function(req,res){
  res.render('list',{ha:day}); //Sending list.ejs (always stored in views Folder)
  //res.send("hello");
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
