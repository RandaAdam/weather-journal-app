// Setup empty JS object to act as endpoint for all routes
let projectData = {};
const port = 8000;

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
function startServer(){
    console.log(`Server running on port: ${port}`);
}

const server = app.listen(port, startServer);


//post route 
//TODO: it will be changed, the url?!!!!
app.post('/showWeather', postFunction );

function postFunction(req, res){
    //note  the data received here is the data comming from textboxes
    newEntry={
        feelings : req.body.feelings,
        temp : req.body.temp,
        date : req.body.date
    }
    projectData = newEntry;
    console.log(req.body);
}

//get route
app.get('/all', sendData);

function sendData (request, response) {
    response.send(projectData);
}

//get route setup



