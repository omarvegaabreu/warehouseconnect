// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path')

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html- login page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })


  // inventory route loads inventory.html
  app.get('/inventory', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/inventory.html'))
  })

  // inventory route loads inventory.html
  app.get('/new', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/add_new_product.html'))
  })

}
