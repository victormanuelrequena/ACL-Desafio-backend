const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const puestoSchema = new mongoose.Schema({
	estado: {
		type: String,
		required: true
	},
	fijo: {
		type: Boolean,
		required: true
	},
	diasDeApartado: {
		type: Number,
		required: true
	},
	key: {
		type: String,
		unique: false,
		required: false
	},
	lugar: {
		type: Number,
		unique: false,
		// required: true
	},
	estacionado: {
		type: Boolean,
		required: false
	},
	hora_de_entrada: {
		type: String,
		required: true
	}
}, {
	timestamps: true,
	versionKey: false
})

puestoSchema.plugin(AutoIncrement, {inc_field: 'lugar'});

module.exports = mongoose.model('Puesto', puestoSchema);