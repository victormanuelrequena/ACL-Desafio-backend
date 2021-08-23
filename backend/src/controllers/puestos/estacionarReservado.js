import Puesto from '../../models/Puesto.model.js';

let chart = 0;

const estacionarEnReservado = async (req, res) => {

	const { idBody, key } = req.body;

	const estReservadoConfig = {
		idBody,
		key,
		estado: 'ocupado',
		estacionado: true
	};

	const estacion = await Puesto.findById(idBody);

	if(chart >= 3) {
		chart = 0;
	};

	if(key === estacion.key) {
		chart = 0;
		const estacionado = await Puesto.findByIdAndUpdate(idBody, estReservadoConfig, {new: true});

		res.json(estacionado).status(200);

	} else {
		chart += 1;
		return res.json({
			message: "Las llaves no coinciden",
			intento: chart
		}).status(401);
	};
};

export default estacionarEnReservado;