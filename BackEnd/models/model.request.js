const mongoose = require('mongoose')

const Request = new mongoose.Schema({
	ip : {
		type : String,
		required : false
	},
	animeName : {
		type : String,
		required : false    
	},
	gender : {
		type : String,
		required : false    
	},
	name : {
		type : String,
		required : false    
	},

})

module.exports = mongoose.model('request', Request)