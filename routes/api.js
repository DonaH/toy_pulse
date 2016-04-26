var
	express = require('express'),
	apiRouter = express.Router(),
	apiCtrl = require('../Controllers/api.js'),
  User = require('../models/user.js')

apiRouter.post('/authenticate', apiCtrl.authenticate)

apiRouter.route('/users')
	.get(apiCtrl.index)
	.post(apiCtrl.create)

// apiRouter.use(apiCtrl.protect)

apiRouter.route('/users/:id')
	.get(apiCtrl.show)
	.patch(apiCtrl.update)
	.delete(apiCtrl.delete)

module.exports = apiRouter
