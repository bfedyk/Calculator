const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const portNum = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){
//   res.send("<h1>Hello World!</h1>");
// });

// User __dirname to get local pathname
// User sendFile(path) to send the specified file
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  // Use body parser and url encoding to get access to request body
  // Get access to variables passed over in HTML form
  // User JavaScript Number() to convert input into number
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Calculation result is " + result);
});

app.listen(portNum, function(){
  console.log("Servetr is running on port 3000");
});
