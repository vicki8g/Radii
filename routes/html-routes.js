// =========================================================
// html-routes - to redirect users to the requested routes:
// =========================================================

// Dependencies:

var path = require("path");

// Routes:

module.exports = function(app) {

    // index route load index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    // profile route load profile.html
    app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/profile.html"));
    });

    app.get("/addgroup", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/groupadd.html"));
    });
};