var
	express = require('express'),
	apiReviewRouter = express.Router(),
	apiReviewCtrl = require('../Controllers/apiReview.js'),
  Review = require('../models/reviewList.js')


apiReviewRouter.post('/reviews', apiReviewCtrl.create)
apiReviewRouter.get('/reviews', apiReviewCtrl.indexReview)
apiReviewRouter.delete('/reviews/:id', apiReviewCtrl.deleteReview)

module.exports = apiReviewRouter
