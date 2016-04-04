// SETUP
var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  app = express()
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts'),
  // ? session = require('express-session')
  dotenv = require('dotenv').config({silent: true})
  // commented out dotenv requirement for heroku deployment
  // because .env variables are set via CLI to heroku directly

  // require all other routes js files

  var port = process.env.PORT || 3000

  // var dbURL = 'mongodb://' + process.env.MLAB_USERNAME + ':' + process.env.MLAB_PASSWORD + // add heroku mlab link here
  var dbURL = 'mongodb://localhost/toy_pulse'

  mongoose.connect(dbURL, function(err){
    if(err) return console.log(err)
    console.log("Connected to MongoDB: " + dbURL)
  })

  // Configure EJS views
  // app.set('view engine', 'ejs')

  // Middlewre

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))
  // app.use(session({
  //   secret: "choochoo",
  //   cookie: {_expires: 86400000} // expires in 24 hours
  // }))
  app.use(ejsLayouts)


  // Server

  app.listen(port, function(){
    console.log("Server running on port " + port + "!!!!!!!!!!!")
  })
