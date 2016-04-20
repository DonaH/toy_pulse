var
	express = require('express'),
	apiReviewRouter = express.Router(),
  // apiCtrl = require('../controllers/api.js')
	apiReviewCtrl = require('../Controllers/apiReview.js'),
  // User = require('../models/user.js')
  Star = require('../models/starlist.js')


apiReviewRouter.post('/reviews', apiReviewCtrl.create)
apiReviewRouter.get('/reviews', apiReviewCtrl.indexReview)
apiReviewRouter.delete('/reviews/:id', apiReviewCtrl.deleteReview)

module.exports = apiReviewRouter
