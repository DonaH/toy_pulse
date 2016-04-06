var
	express = require('express'),
	apiRoutes = express.Router(),
	apiCtrl = require('../controllers/api.js')
  User = require('../models/User.js')


// apiRouter.post('/authenticate', apiCtrl.authenticate)
//
// apiRouter.route('/users')
// 	.get(apiCtrl.index)
// 	.post(apiCtrl.create)
//
// apiRouter.use(apiCtrl.protect)
//
// apiRouter.route('/users/:id')
// 	.get(apiCtrl.show)
// 	.patch(apiCtrl.update)
// 	.delete(apiCtrl.delete)

//**************************************************/
// backend routes reference methods in Controllers/api.js
apiRoutes.post('/authenticate', apiCtrl.authenticate)

apiRoutes.get('/protect', apiCtrl.protect)

apiRoutes.post('/users', apiCtrl.create)

apiRoutes.get('/users', function(req,res){
  User.find({}, function(err, users){
    res.json(users)
  })
})
///******************* END ROUTES *****************/
module.exports = apiRoutes
