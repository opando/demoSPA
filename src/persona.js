var mongoose = require('mongoose');
	Schema   = mongoose.Schema;

var personaSchema = new Schema(
{
	nombre : String,
	apellido : String,
	edad : Number,
	dni : String
}
);

module.exports = mongoose.model('persona', personaSchema);