// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cart = {
  all: function (cb) {
    orm.all("carts", function (res) {
      cb(res);
      console.log("test");
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("trucks", cols, vals, function (res) {
      cb(res);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    orm.selectWhere("carts", colToSearch, valOfCol, function (res) {
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
module.exports = cart;
