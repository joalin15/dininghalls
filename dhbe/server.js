// Importing Node modules and initializing Express
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const mongoose = require('mongoose')
const fs = require('fs')
const scraper = require('./scraper')

app.set('view engine', 'ejs')
app.set('json spaces', 4);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
routes(app)

// Database setup and server startup
mongoose.connect(config.database, (err, database) => {
  if (err) return console.log(err)
  app.listen(config.port, function() {
    console.log('Your server is running on port ' + config.port)
    scraper.request
  })
})

var db = mongoose.connection
db.on('error', function() {
  throw new Error('unable to connect to database at ' + config.database)
})


/* OLD */
/*
// Get from database (Read)
app.get('/', (request, response) => {
  response.sendFile('/Users/Joann/Projects/dininghalls/views/index.html')
})

app.get('/foods', (request, response) => {
  db.collection('foods').find().toArray(function(err, results) {
    if (err) return console.log(err)
    response.render('/Users/Joann/Projects/dininghalls/views/foods.ejs', {foods: results});
  })
})

// Post to database (Create)
app.post('/users', (request, response) => {
  console.log(request.body)
  db.collection('users').save(request.body, (err, result) => {
    if (err) return console.log(err)
    response.redirect('/')
  })
})
*/
