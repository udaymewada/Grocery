var express = require("express");
var app =express();
var port= 3000;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/grocery");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/register.html");
});

app.post("/index", (req,res)=>{
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});
app.listen(port, ()=>{
    console.log("server started");
})

var nameSchema  = new mongoose.Schema({
    Username : String,
    Email : String,
    Password : String
})

var  User = mongoose.model("User", nameSchema);
