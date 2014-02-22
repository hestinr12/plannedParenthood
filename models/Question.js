var AnswerSchema = new mongoose.Schema({
	text : 			String
	author : 		Number
	approved : 		Boolean
	time_posted : 	Date
})

var QuestionSchema = new mongoose.Schema({
	text : 		String
	author : 	Number
	answers : 	[AnswerSchema]
	tags : 		[String]	
})
