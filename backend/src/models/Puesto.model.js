import mongoose from 'mongoose';

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
		unique: true,
		required: false
	},
	lugar: {
		type: Number,
		unique: true,
		required: true
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

export default mongoose.model('Puesto', puestoSchema);