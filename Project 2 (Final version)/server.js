var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'htmlstuff')));
require("./Routes/htmlRoutes")(app);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = requires("./controllers/catsController.js");

// app.use(routes);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

