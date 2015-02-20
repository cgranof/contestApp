var Submission = function(name, url, title, description) {
	this.name = name;
	this.url = url;
	this.title = title;
	this.description = description;
};

var submissions = [];

var addSubmission = function(name, url, title, description){
	submissions.push(new Submission(
		name, url, title, description
	));
}; 

module.exports = {
	submissions: submissions,
	addSubmission: addSubmission
};