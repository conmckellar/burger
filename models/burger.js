var orm = require("../config/orm.js");

// Routes


var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){

      callback(res);
    });
  },

  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){

      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){

      callback(res);
    });
  }

};


module.exports = burger;

/*
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    orm.selectAll(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new burger. We can create a burger using the data on req.body
  app.post("/api/burgers", function(req, res) {
    orm.insertOne(req.body, function(results) {
      res.json(results);
    });
  });

  // PUT route for updating burgers. We can access the updated burger in req.body
  app.put("/api/burgers", function(req, res) {
    orm.updateOne(req.body, function(results) {
      res.json(results);
    });
  });
};
*/