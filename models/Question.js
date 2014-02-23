var mongoose = require('mongoose');
var validate = require('mongoose-validator').validate;
var textSearch = require('mongoose-text-search');
var Schema = mongoose.Schema;

var AnswerSchema = require("./Answer");

var questionSchema = new mongoose.Schema({
	text : { 
		type : String,
		required : true,
		validate : validate('len', 0, 160)
	},
	phone : {
		type: Number,
		required: true
	},
	time_posted : {
		type : Date,
		default : Date.now
	},
	approved : {
		type : Boolean,
		default : false
	},
	answers : [AnswerSchema.schema],
	tags : [String]	
});

questionSchema.plugin(textSearch);

questionSchema.index({text :'text'});

module.exports = mongoose.model('Question', questionSchema);
