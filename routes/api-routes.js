// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("./../models");
console.log("loading db")
console.log(db.matches)


// const myModule = require('./../public');
// let val = myModule.hello();   
// console.log(val)

// var newdb = require("./../public");

// var value = newdb.num;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/matches", function(req, res) {
    console.log(db)
    // findAll returns all entries for a table when used with no options
    db.matches.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo[0].name);
    });
  });

  // POST route for saving a new Matches
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property

   

  
    db.matches.create({

      
      name: req.body.text,
      // dob: "10/1/2013",
      // lat: lat2,
      // log: lng2
    }).then(function(dbTodo) {
      // We have access to the new Matches as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the Matches to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which Matches we want to destroy with "where"
    db.Matches.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

  // PUT route for updating todos. We can get the updated Matches data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Matches.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};




