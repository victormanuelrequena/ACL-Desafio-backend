import Puesto from '../../models/Puesto.model.js';
import moment from 'moment';
moment.locale('es');
const formato = "DD MM YY HH mm ss";

const estacionarVehiculo = async (req, res) => {
	const { idBody } = req.body;
	console.log(idBody);
	const now = moment();

	const infoEstacionado = {
		estado: 'ocupado',
		estacionado: true,
		hora_de_entrada: now.format(formato)
	};

	const estacionado = await Puesto.findByIdAndUpdate(idBody, infoEstacionado, {new: true})

	 res.json(estacionado).status(201);
};
export default estacionarVehiculo;