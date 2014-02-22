var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
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
	approved : {
		type : Boolean,
		required : true
	}
	answers : [AnswerSchema]

	tags : [String]	
});

module.exports = mongoose.model('Question', questionSchema);
