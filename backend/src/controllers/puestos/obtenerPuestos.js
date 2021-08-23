import Puesto from '../../models/Puesto.model.js';

const obtenerPuestos = async (req, res) => {
	const puestos = await Puesto.find();
	res.json(puestos).status(200);
};
export default obtenerPuestos;