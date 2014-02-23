var Question = require('../models/Question');

exports.searchQuestion = function(req, res, next) { 
  var query = req.query.query;
  Question.textSearch(query, function(err, question) {
    results = question.results.map ( function(curr, index, thisArg) {
      return curr.obj;}), 
    res.send(results);
  });
}
