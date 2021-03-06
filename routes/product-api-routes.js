// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models')

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  app.get('/products', function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Product.findAll({
      // include: [db.Products]
    }).then(function (dbProducts) {
      res.json(dbProducts)
    })
  })

  // Get route for retrieving a single post
  app.get('/products/:id', function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Products]
    }).then(function (dbProducts) {
      res.json(dbProducts)
    })
  })

  // New Product route for saving a new product
  app.post('/products', function (req, res) {
    db.Product.create(req.body).then(function (dbProducts) {
      res.json(dbProducts)
    })
  })

  // DELETE route for deleting posts
  app.delete('/products/:id', function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProducts) {
      res.json(dbProducts)
    })
  })

  // PUT route for updating posts
  app.put('/products', function (req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbProducts) {
      res.json(dbProducts)
    })
  })
}
