var videoSubmissions = require('../models/submission.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	submissions: function(req, res) {
		res.render('submissions', {videos:videoSubmissions.submissions});
	},

	submitContest: function(req, res){
		videoSubmissions.addSubmission(
			req.body.name,
			req.body.url,
			req.body.title,
			req.body.description
		);
		res.redirect('/submissions');
	}

	

};

module.exports = indexController;