// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/login.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/signup.html"));
  });

  app.get("/search", function (req, res) {
    res.render("index");
  });
  // If no matching route is found default to home

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/index.html"));

  });
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/index.html"));

  });
  // app.get("/test", function (req, res) {
  //   // res.render('index');
  //   var truck = require("../models/trucks.js");
  //   // Console log all the parties that have a party-type of grown-up.

  //   truck.selectWhere("trucks", "truck_type", userInput); {

  //     res.render("index");
  //   };
  //   // res.sendFile(path.join(__dirname, "../htmlstuff/views/layouts/main.handlebars"));
  // });
  app.get("/search/:foodtype?", function (req, res) {
    // res.render('index');
    var truck = require("../models/trucks.js");
    //var userInfo = require("../views/layouts/main.handlebars");
    //console.log("the user's info: " + userInfo.foodtype);
    foodtype = req.params.foodtype ? req.params.foodtype : undefined
    truck.selectWhere("trucks", "truck_type", foodtype, function (data) {

      var object = {
        trucks: data,
      };
      console.log(data);
      res.render("index", object);
    });

  });
  app.get("/pizzas", function (req, res) {
    // res.render('index');
    var truck = require("../models/trucks.js");
    truck.selectWhere("trucks", "truck_type", "pizza", function (data) {
      console.log("KEK")
      var object = {
        trucks: data,
      };
      console.log(data);
      res.render("index", object);
    });

  });
  app.get("/icecreams", function (req, res) {
    // res.render('index');
    var truck = require("../models/trucks.js");
    truck.selectWhere("trucks", "truck_type", "icecream", function (data) {
      console.log("KEK")
      var object = {
        trucks: data,
      };
      console.log(data);
      res.render("index", object);
    });

  });
  app.get("/test", function (req, res) {
    // res.render('index');
    var truck = require("../models/trucks.js");
    truck.all(function (data) {
      var object = {
        trucks: data,
      };
      console.log(data);
      res.render("index", object);
    });

  });
  app.post("api/users", function (req, res) {
    // res.render('index');
    req.body --> {
      name:"william",
      sleepy: true,
    }
    truck.create([a,b,c],[val1,val2])
    var truck = require("../models/trucks.js");
    truck.all(function (data) {
      var object = {
        trucks: data,
      };
      console.log(data);
      res.send("index", object);
    });

  });
};

