var mongoose = require('mongoose');
var validate = require('mongoose-validator').validate;
var Schema = mongoose.Schema;

var AnswerSchema = require("./Answer");

var questionSchema = new mongoose.Schema({
	text : { 
		type : String,
		required : true,
		validate : validate('len', 0, 160)
	},
	author : {
		type: Schema.Types.ObjectId,
		required: true,
		ref : 'User'
	},
	time_posted : {
		type : Date,
		default : Date.now
	},
	approved : {
		type : Boolean,
		default : false
	},
	answers : [AnswerSchema],

	tags : [String]	
});

module.exports = mongoose.model('Question', questionSchema);
