var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	text : 			String
	author : 		Schema.Types.ObjectId
	approved : 		Boolean
	time_posted : 	Date
})

var QuestionSchema = new mongoose.Schema({
	text : 		String
	author : 	Schema.Types.ObjectId
	answers : 	[AnswerSchema]
	tags : 		[String]	
})
