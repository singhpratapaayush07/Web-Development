const mongoose= require('mongoose');

// setting up connection
mongoose.connect("mongodb://localhost:27017/fruitsDb",{ useNewUrlParser: true , useUnifiedTopology: true});



//1. Create Operation

//create Schema(blue print of table)
const personSchema= new mongoose.Schema({
  name:String,
  age:Number
});

//creating model as personModel & table as Person
const personModel = mongoose.model("Person",personSchema);

//creating insatnces i.e entries of table
const john = new personModel({
  name: "john",
  age:45
});

const randy = new personModel({
  name: "randy",
  age: 21
});

const sam = new personModel({
  name: "Sam",
  age: 23
});

//Insert only one entry in table
sam.save();

//Inserting all the entries of table in model
personModel.insertMany([john,randy,sam],function(err){
  if(err) {
    console.log(err);
  }
  else {
    console.log("Persons added Successfully");
  }
});



//2. Read Operation
personModel.find({},function(err, data){
  if(err){
    console.log(err);
  }
  else{
    //console.log(data); //note we array of javaScript object is returned. we can use forEach loop if we want to access particular value(say age) of every element
    data.forEach(function(val){
      console.log(val.name);
    });

    //closing connection if did not get any error and we completed last task (find operation in this case)
    mongoose.connection.close();
  }
});

//3. Updated Operation
personModel.updateOne({_id:"608a959060682b2cc06d81da"},{name:"Mandy"},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Updated");
  }
});

// 4. Delete operation
personModel.deleteOne({name:"Mandy"},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Deleted");
  }
});
