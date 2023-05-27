// set up the environmnet by installing 
// npm init - this will start the set up for the application
// install all the following packages
//nmp install express
//nmp install body-parser
//npm install dotenv
//npm install cors
//npm install ejs
//npm install mysql
//npm install nodemailer
//npm install axios




// setting up the constants

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

var corsOptions = {
    origin:"*"
};

app.use(cors(corsOptions));

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// setup API routing here

// set up a simple rount for testing

app.get("/", (req, res) =>{
    res.json({Message: "Welcome to our API Application."});
});


// List all the routes that were defined for the api in the route files

require('./App/routes/auth_routes')(app);


// confirm that the server is running and setup
//app.listen(3000, function(){
   app.listen(process.env.Port_Address, function (){
        console.log("Server Stated on " + process.env.Port_Address)  ;
        });




