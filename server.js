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
var apiReviewCtrl = require('./Controllers/apiReview');
var apiRouter = require('./routes/api');
var apiReviewRouter = require('./routes/apiReview');

var PORT = process.env.PORT || 3000
mongoose.connect(config.database)
app.set('secret', config.secret)

app.use(bodyParser.urlencoded({extended: true })) /// what is extended?
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/', function(req,res){
  // res.send('Hello! The API is at http://localhost:' + PORT + '/api')
  res.sendfile(__dirname + '/public/index.html')
})

app.use('/api', apiRouter)
app.use('/apiReview', apiReviewRouter)

apiRouter.get('/', function(req,res){
  res.json({ message: 'Welcome to Toy Pulse!'})
})

app.listen(PORT)
console.log('Listening at port ' + PORT + '!!!!!!!!!!')
