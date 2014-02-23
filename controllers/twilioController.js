var twilio = require('twilio');
var client = require('twilio')('AC9863e5325a4c193320f5eed2b3be7140','fa8f50b619a2799a61316c1abc256e84');
var Question = require('../models/Question');

// { ToCountry: 'US',
//   ToState: 'PA',
//   SmsMessageSid: 'SMebf139b3a4be750585fb558337cc12f8',
//   NumMedia: '0',
//   ToCity: 'NEW FLORENCE',
//   FromZip: '92691',
//   SmsSid: 'SMebf139b3a4be750585fb558337cc12f8',
//   FromState: 'CA',
//   FromCity: 'IRVINE',
//   Body: 'Jsjsh',
//   FromCountry: 'US',
//   To: '+17245364777',
//   ToZip: '15944',
//   MessageSid: 'SMebf139b3a4be750585fb558337cc12f8',
//   AccountSid: 'AC9863e5325a4c193320f5eed2b3be7140',
//   From: '+19493071775',
//   ApiVersion: '2010-04-01' }

exports.loginAndProcess = function(req, res, next){
  var twiml = new twilio.TwimlResponse();
  twiml.message("Thanks for submitting your question. We'll get back to you asap!");
  res.send(twiml);
    
  var text_body = req.body.Body;

  
  if(text_body.indexOf("suicide") > -1) {
    User.find({type : 'staff'}, function(err, staff){
      staff.map(function(curr, index, thisArg){
        client.sendMessage({
          to: '+' + curr.profile.phoneNumber,
          from: '+7245364777',
          body: 'The following text was just recieved.\n' + text_body + '\n Please respond immediately.'
        }, function(err, response){});
      });
    });
  }
    
  // Post new question
  var question = new Question({phone: req.body.From, text: req.body.Body});
  
  
  question.save( function(err, question) {
    if (err)
      console.log(err, question);
  });
}
