const Puesto = require('../../models/Puesto.model.js');

const eliminarPuesto = async (req,res) => {

	const {idBody} = req.body;

	 const puestoEliminado = await Puesto.findByIdAndDelete(idBody);

	 res.json({message: `Puesto eliminado exitosamente.`}).status(201);
};

module.exports = eliminarPuesto;