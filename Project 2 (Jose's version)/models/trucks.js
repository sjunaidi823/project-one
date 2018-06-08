// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var truck = {
  all: function (cb) {
    orm.all("trucks", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("trucks", cols, vals, function (res) {
      cb(res);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    orm.selectWhere(tableInput, colToSearch, valOfCol, function (res) {
console.log("here");
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("truck", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (trucksController.js).
module.exports = truck;
