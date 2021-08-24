const Puesto = require('../../models/Puesto.model.js');

const retirarReservacion = async (req,res) => {
	const { idBody } = req.body;

	const retirarReservacionConfig = {
		estado: 'disponible',
		fijo: false,
		diasDeApartado: 0,
		estacionado: false
	};

	const vehiculoRetirado = await Puesto.findByIdAndUpdate(idBody, retirarReservacionConfig, {new: true});

	res.json({message: 'La reservacion a sido cancelada.'}).status(200);
};

module.exports = retirarReservacion;