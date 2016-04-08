var
	express = require('express'),
	apiReviewRouter = express.Router(),
  // apiCtrl = require('../controllers/api.js')
	apiReviewCtrl = require('../controllers/apiReview.js'),
  // User = require('../models/User.js')
  Star = require('../models/starlist.js')


apiReviewRouter.post('/reviews', apiReviewCtrl.create)


module.exports = apiReviewRouter
