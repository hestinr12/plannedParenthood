var Question = require('../models/Question');
var Answer = require('../models/Answer');

exports.getQuestions = function(req, res, next) {
	Question.find({}, function(err, questions) {
		res.send(questions);
	});
}

exports.getQuestionById = function(req, res, next){
	var id = req.param.qid;
	Question.findById(id, function(err, question) {
		res.send(question);
	});
}

exports.approveQuestion = function(req, res, next){
	var id = req.param.qid;
	Question.findById(id, function(err, question) {
		question.approved = true;
		res.send(question);
	});
}

exports.disapproveQuestion = function(req, res, next){
	var id = req.param.qid;
	Question.findById(id, function(err, question) {
		question.approved = false;
		res.send(question);
	});
}

exports.getAnswersForQuestion = function(req, res, next){
	var qid = req.param.qid;
	Question.findById(qid, function(err, question) {
		res.send(question.answers);
	});
}

exports.postAnswerForQuestion = function(req, res) {
  var qid = req.params.qid;
  Question.findById(qid, function(err, question) {
    var answer = new Answer({text: req.body.text, author: req.user._id});
    question.answers.push(answer);
    question.save(function(err, question) {
      res.redirect("/forum");
    });
  });
}

exports.getAnswersForQuestionById = function(req, res, next){
	var qid = req.param.qid;
	var aid = req.param.aid;
	Question.findById(id, function(err, questions) {
		Answer.findById(id, function(err, answer){
			res.send(answer);
		});
	});
}

exports.approveAnswer = function(req, res, next){
	var qid = req.param.qid;
	var aid = req.param.aid;
	Question.findById(id, function(err, questions) {
		Answer.findById(id, function(err, answer){
			answer.approved = true;
			res.send(answer);
		});
	});
}

exports.disapproveAnswer = function(req, res, next){
	var qid = req.param.qid;
	var aid = req.param.aid;
	Question.findById(id, function(err, questions) {
		Answer.findById(id, function(err, answer){
			answer.approved = false;
			res.send(answer);
		});
	});
}

exports.postQuestion = function(req, res, next){
	var question = new Question(req.body);
	question.save(function(err, data){res.send(200)});
}

exports.insertTag = function(req, res)
{
	Question.findById(req.params.qid, function(err, question){
		question.tags.addToSet(req.params.tag);
		question.save(function(err){
			res.send(question);
		});
	});
}

exports.removeTag = function(req, res){
	Question.findById(req.params.qid, function(err, question){
		question.tags.pull(req.params.tag);
		question.save(function(err){
			res.send(question);
		});
	});
}
