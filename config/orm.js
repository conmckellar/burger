var connection = require("../config/connection.js");

//ORM

var tableName = "burgers";

var orm = {

	selectAll: function(callback) {
		var s = "SELECT * FROM " + tableName;

	    connection.query(s, function(err, result) {

	      callback(result);

	    });
	},

	insertOne: function(burgers, callback) {
		var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
		burgers.devoured = burgers.devoured || 0;
		
		connection.query(s, [burgers.burger_name, burgers.devoured], function(err, result) {

			callback(result);

		})
	},


	updateOne: function(burgers, callback) {
		var s = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

		connection.query(s, [burgers.burger_name, burgers.id], function(err,result) {

			callback(result);

		});


	}


};

module.exports = orm;