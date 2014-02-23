var Question = require('../models/Question');

exports.index = function(req, res) {
  var user = req.user;

  Question.find({}, function(err, questions) {
    if (typeof user === "undefined" || user.type !== "staff") {
      res.render('forum', {
        title: 'Forum', 
        questions: questions
      });
    } else {
      res.render('forum-staff', {
        title: 'Forum', 
        questions: questions
      });
    }
  });
};
