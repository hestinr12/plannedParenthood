var twilio = require('twilio');
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
      
    // Post new question
    var question = new Question({phone: req.body.From, text: req.body.Body});
    question.save( function(err, question) {
      if (err)
        console.log(err, question);
      socket.broadcast.emit('new question');
    });
  };
