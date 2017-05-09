// Challenge:

// 1. Create a json formatted dataset that describes something in your life (family members, favourite puns, students on your table)
// 2. Use the express generator to create an node/express app
// 3. Create a root route which will render an ejs template with your data
// 4. Create another route which sends the data in json format

var express = require('express');
var app = express();
var path = require('path');

// get file with json data
var dataFile = require('./data.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// root route
app.get('/', function (req, res) {
  res.render('index', { dataVariable: dataFile });
})

// /json route
app.get('/json', function (req, res) {
	res.json(dataFile);
})

// server listener
app.listen(3000, function () {
  console.log('Espressoff app listening on port 3000!')
})
