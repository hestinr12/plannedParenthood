var Question = require('../models/Question');
var Answer = require('../models/Answer');

exports.getQuestions = function(req, res, next) {
	Question.find({}, function(err, questions) {
		res.send(questions);
	});
}

exports.getQuestionById = function(req, res, next){
	id = req.param.qid;
	Question.findById(id, function(err, questions) {
		res.send(questions);
	});
}


exports.getAnswersForQuestion = function(req, res, next){
	qid = req.param.qid;
	Question.findById(id, function(err, questions) {
		Answer.find({}, function(err, answers){
			res.send(answers);
		});
	});
}

exports.getAnswersForQuestionById = function(req, res, next){
	qid = req.param.qid;
	aid = req.param.aid;
	Question.findById(id, function(err, questions) {
		Answer.findById(id, function(err, answer){
			res.send(answer)
		});
	});
}