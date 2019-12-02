var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	restaurant_id: Number,
	name: { type: String, required: true},
	borough: String,
	cuisine: String,
	image: Buffer,
	photo_mimetype: String,
	address: {
		street: String,
		building: String,
		zipcode: Number,
		coord: { lat: Number, long: Number}
	},
	grades:	{
		user: String, score: Number
	},
	owner: { type: String, required: true}
});
module.exports = mongoose.model('restaurant', restaurantSchema);
