var expres = require('express');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");


// var USer = mongoose.model("User", nameSchema);

var app = expres();
app.get("/",function(req,res)
{
    res.sendFile(__dirname + '/register.html');
});
app.get("/index",function(req,res)
{
    res.sendFile('index.html');
}
);

app.post("/index", (req, res) => {
    // var myData = new User(req.body);
    // myData.save()
    //   .then(item => {
        res.sendFile(__dirname + '/index.html');
    //   })
    //   .catch(err => {
    //     res.status(400).send("unable to save to database");
    //   });
  });
app.listen(3000,function()
{   
    console.log("server started");
})

// var nameSchema = new mongoose.Schema({
//     userame: String,
//     email: String,
//     pass: String,
//   });