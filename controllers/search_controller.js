var Question = require('../models/Question');

exports.searchQuestion = function(req, res, next) { 
  var query = req.param.query;
  Question.textSearch(query, function(err, question) {
    res.send(question);
  });
}
