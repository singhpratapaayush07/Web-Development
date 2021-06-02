const express= require("express");


const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

var day="Fucked up";

var val=4;
if(val==1){
  day="Weekday";
}
else{
  day="Weekend";
}

app.get("/",function(req,res){
  res.render('list',{ha:day});
  //res.send("hello");
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
