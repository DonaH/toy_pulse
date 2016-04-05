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
var User   = require('./models/user'); // get our mongoose model

var PORT = process.env.PORT || 3000
mongoose.connect(config.database)
app.set('superSecret', config.secret)

app.use(bodyParser.urlencoded({extended: false })) /// what is extended?
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/', function(req,res){
  res.send('Hello! The API is at http://localhost:' + port + '/api')
})

app.get('/setup', function(req,res){
  var nick = new User({
    name: 'Dona',
    password: 'password',
    admin: true
  })

  nick.save(function(err){
    if (err) throw err;
    console.log('User saved successfully')
    res.json({ success: true})
  })
})

var apiRoutes = express.Router()

apiRoutes.post('/authenticate', function(req,res){
  console.log(req.body)
  User.findOne({name: req.body.name}, function(err, user){
    if (err) throw err;
    if (!user){
      res.json({success: false, message: 'User not found'})
    } else if (user){
      if (user.password != req.body.password){
        res.json({success: false, message: 'Wrong password'})
      } else {
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 // 24 hours
        })
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        })
      }
    }
  })
})

apiRoutes.get('/', function(req,res){
  res.json({ message: 'Welcome to Toy Pulse!'})
})

// middleware Routes to verifty token
apiRoutes.use(function(req, res, next){
  // check header or url parameteres or post parameters for a token
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  //  x-access-token:token || http://localhost:7000/api/?token=quarter || /api/users?token=
  if (!token){
    res.json({
      success: false,
      message: 'you need a token to play at Toy Pulse!'})
  } else {
      jwt.verify(token, app.get('superSecret'), function(err, decoded){
        if (err){
          return res.json({
            success:false,
            message:'That token is not legit'
          })
        } else {
        // everything is good with the token, then save it to the request obj in other routes
            req.decoded = decoded;
            next()
        }
      })
    }
})
// to get a token, use post localhost:7000/api/authenticate put in key/value pair
// name: xxx   password: password

apiRoutes.get('/users', function(req,res){
  User.find({}, function(err, users){
    res.json(users)
  })
})
app.use('/api', apiRoutes)
app.listen(PORT)
console.log('Listening at port ' + PORT + '!!!!!!!!!!')
