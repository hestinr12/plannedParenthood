var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
	text : {
		type : String,
		required : true
	},
	author : {
		type: Schema.Types.ObjectId,
		required : true,
		ref : 'User'
	},
	approved : {
		type : Boolean,
		default : false
	},
	time_posted : {
		type : Date,
    default : Date.now
	}
})
