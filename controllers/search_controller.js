var Question = require('../models/Question');

exports.searchQuestion = function(req, res, next) { 
  var query = req.query.query;
  console.log(query);
  Question.textSearch('again', function(err, question) {
    console.log(question);
    res.send(question);
  });
}
