const keyGenerate = require('../../libs/keyGenerate.js');
const Puesto = require('../../models/Puesto.model.js');

const crearPuesto = async (req,res) => {
	const { lugar } = req.body;
	for(let i = 0; i < lugar; i++) {

	const estado = 'disponible';
	const fijo = false;
	const diasDeApartado = 0;
	const hora_de_entrada = 0;
	const key = keyGenerate(6);
	const estacionado = false;

	const nuevoPuesto = new Puesto({
	 estado,
	 fijo,
	 diasDeApartado,
	 key,
	 estacionado,
	 hora_de_entrada
	 });

	 const puestoGuardado = await nuevoPuesto.save();
	}

	 res.json({message: `Puesto creado exitosamente`}).status(201);

};


module.exports = crearPuesto;