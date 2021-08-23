import keyGenerate from '../../libs/keyGenerate.js';
import Puesto from '../../models/Puesto.model.js';

const crearPuesto = async (req,res) => {
	const { lugar } = req.body;
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
	 lugar,
	 estacionado,
	 hora_de_entrada
	 });

	 const puestoGuardado = await nuevoPuesto.save();

	 res.json({message: `Puesto creado exitosamente en el lugar: ${lugar}`}).status(201);
};


export default crearPuesto;