// This is the main server file for Radii project
// ==============================================
// Defining the dependencies:
// ==============================================

var express = require("express");
var bodyParser = require("body-parser");

//===============================================
// Set up the express app:
//===============================================

var app = express();
var PORT = process.env.PORT || 8080;

//===============================================
// Requiring our models for syncing:
//===============================================

var db = require("./models");

//===============================================
// Set up the express app to handle data parsing:
//===============================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//===============================================
// Set up static directory:
//===============================================

app.use(express.static("./public"));

//===============================================
// Set up the app routes:
//===============================================

require("./routes/html-routes.js")(app);
require("./routes/users-api-routes.js")(app);
// require("./routes/groups-api-routes.js")(app);
// require("./routes/events-api-routes.js")(app);

//===============================================
// Initilize the server to start listening:
//===============================================

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT, function() {
//      console.log("App listening on PORT " + PORT);
//    });