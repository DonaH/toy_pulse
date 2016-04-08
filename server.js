// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
// var User   = require('./models/user'); // get our mongoose model
var apiCtrl = require('./Controllers/api');
var apiRoutes = require('./routes/api')
var apiReviewRoutes = require('./routes/apiReview')

var PORT = process.env.PORT || 3000
mongoose.connect(config.database)
app.set('secret', config.secret)

app.use(bodyParser.urlencoded({extended: false })) /// what is extended?
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/', function(req,res){
  // res.send('Hello! The API is at http://localhost:' + PORT + '/api')
  res.sendfile(__dirname + '/public/index')
})

app.use('/api', apiRoutes)
app.use('/apiReview', apiReviewRoutes)

apiRoutes.get('/', function(req,res){
  res.json({ message: 'Welcome to Toy Pulse!'})
})

app.listen(PORT)
console.log('Listening at port ' + PORT + '!!!!!!!!!!')
