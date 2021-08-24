const Puesto = require('../../models/Puesto.model.js');

const moment = require('moment');
moment.locale('es');
const formato = "DD MM YY HH mm ss";

const estacionarVehiculo = async (req, res) => {
	const { idBody } = req.body;
	const now = moment();

	const infoEstacionado = {
		estado: 'ocupado',
		estacionado: true,
		hora_de_entrada: now.format(formato)
	};

	const estacionado = await Puesto.findByIdAndUpdate(idBody, infoEstacionado, {new: true})

	 res.json(estacionado).status(201);
};
module.exports = estacionarVehiculo;