var
	Review = require('../models/starlist.js'),
  config = require('../config') // get our config file


module.exports = {

	// list all reviews
	index: function(req,res){
		User.find({}, function(err, reviews){
			if(err) return console.log(err)
			res.json(reviews)
		})
	},

	// create new review
	create: function(req,res){
		var newReview = new Review(req.body)
    // newUser.password = newUser.generateHash(req.body.password)
		newReview.save(function(err, review){
			if(err) return console.log(err)
			res.json({success: true, message: "Review created!", review: review})
		})
	},

	// show specific review
	show: function(req,res){
		Review.findOne({_id: req.params.id}, 'toy_name reviewer', function(err, review){
			if(err) return console.log(err)
			res.json(review)
		})
	},

	// update a review
	update: function(req,res){
		User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, review){
			if(err) return console.log(err)
			res.json({success: true, message: "Review updated!", review: review})
		})
	},

	// delete a review
	delete: function(req,res){
		User.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "Review Deleted!"})
		})
	}

}
