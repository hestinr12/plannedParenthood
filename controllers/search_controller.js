var Question = require('../models/Question');

exports.searchQuestion = function(req, res, next) { 
  var query = req.query.query;
  var user = req.user;

  Question.textSearch(query, function(err, question) {
    results = question.results.map ( function(curr, index, thisArg) {
      return curr.obj;
    }); 
    if (typeof user === "undefined" || user.type !== "staff") {
      res.render('forum', {
        title: 'Forum', 
        questions: results
      });
    } else {
      res.render('forum-staff', {
        title: 'Forum', 
        questions: results
      });
    }

  });
}
