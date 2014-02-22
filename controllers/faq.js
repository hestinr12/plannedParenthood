
exports.index = function(req, res) {
//  var user = req.user; 
  var user = {type: "staff"};
  var questions  =  [
    {
    "author": "",
    "text"  : "Question 1",
    "approved": true,
    "tags": [], 
    "answers": [ 
      { 
      "author": "",
      "text"  : "Answer 1 to Q1",
      "approved": true,
    }, 
    { 
      "author": "",
      "text"  : "Answer 2 to Q1",
      "approved": false,
    }, 
    { 
      "author": "",
      "text"  : "Answer 3 to Q1",
      "approved": true,
    }
    ]
  },
  { 
    "author": "",
    "text"  : "Question 2",
    "approved": true,
    "tags": [], 
    "answers": [] 
  }
  ];
  if (user.type === "staff"){
    res.render('faq-staff', {
      title: 'Frequently Asked Questions',
      questions: questions });
  }else{ // Normal student
    res.render('faq', {
      title: 'Frequently Asked Questions',
      questions: questions });
  }
};
