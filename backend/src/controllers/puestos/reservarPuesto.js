const Puesto = require('../../models/Puesto.model.js');
const moment = require('moment');
moment.locale('es');
const formato = "dddd MMMM YYYY HH mm ss";

const now = moment();

const reservarPuesto = async (req, res) => {
	const { diasDeApartado, idBody } = req.body;

	const now = moment().format(formato);
	const hora_de_entrada = now;

	 if(diasDeApartado < 12) {
	 	return res
	 	.json({message: "Los puestos fijos son a partir de 12 dias."})
	 	.status(401);
	 }

	 if(diasDeApartado > 79) {
	 	return res
	 	.json({message: "Los puestos fijos se alquilan por un maximo de 79 dias."})
	 	.status(401);
	 }

	 const reservarConfig = {
	 	hora_de_entrada,
	 	estacionado: false,
	 	fijo: true,
	 	diasDeApartado,
	 	estado: 'reservado'
	 };

	 const estacion = await Puesto.findById(idBody);
	 const puestoGuardado = await Puesto.findByIdAndUpdate(idBody, reservarConfig, {new: true})
	 let monto = puestoGuardado.diasDeApartado * (0,74);

	 const comprobante = {
	 	Dias: diasDeApartado,
	 	key: estacion.key,
	 	monto: `${monto}`
	 };

	 res.json(comprobante).status(201);
};

module.exports = reservarPuesto;