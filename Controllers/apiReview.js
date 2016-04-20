var
	Review = require('../models/starlist.js'),
  config = require('../config') // get our config file


module.exports = {

	// list all users
	index: function(req,res){
		User.find({}, function(err, reviews){
			if(err) return console.log(err)
			res.json(reviews)
		})
	},
	// delete a user
	delete: function(req,res){
		User.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "Review Deleted!"})
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
	// list all reviews
	indexReview: function(req,res){
		Review.find({}, function(err, reviews){
			if(err) return console.log(err)
			res.json(reviews)
		})
	},
	deleteReview: function(req,res){
		Review.findByIdAndRemove(req.params.id, function(err){
			res.json({success: true, message: "Review deleted!"})
		})
	},

	// update a review
	update: function(req,res){
		Review.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, review){
			if(err) return console.log(err)
			res.json({success: true, message: "Review updated!", review: review})
		})
	}



}
