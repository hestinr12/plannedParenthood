var twilio = require('twilio');
var Question = require('../models/Question');
var secret = require("../config/secrets");
var User = require("../models/User");

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
    console.log(req.body);
    var twiml = new twilio.TwimlResponse();
    twiml.message("Thanks for participating, shitface!");
    res.send(twiml);

    // Upsert User
      var user = new User({
        profile: {
          phoneNumber: req.body.From
        }
      });

      user.update({$set: {"profile.phoneNumber": req.body.From}}, {upsert: true}, function(err) {
        if (err) console.log(err);
      });
      
      // Post new question
      var question = new Question({author: user._id, text: req.body.Body});
      question.save();
  };
