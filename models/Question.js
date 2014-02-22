var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	text : {
		type : String,
		required : true
	}
	author : {
		type: Schema.Types.ObjectId,
		required : true,
		ref : 'User'
	}
	approved : {
		type : Boolean,
		required : true
	}
	time_posted : {
		type : Date,
		required : true
	}
})

var QuestionSchema = new mongoose.Schema({
	text : { 
		type : String,
		required : true,
		validate : validate('len', 0, 160)
	} 
	author : {
		type: Schema.Types.ObjectId,
		required = true,
		ref : 'User'
	}
	time_posted : {
		type : Date,
		required : true
	}
	answers : [AnswerSchema]
	tags : [String]	
})
