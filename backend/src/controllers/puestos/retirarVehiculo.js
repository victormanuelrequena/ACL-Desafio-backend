import Puesto from '../models/Puesto.model.js';
import keyGenerate from '../libs/keyGenerate.js';
import moment from 'moment';
moment.locale('es');
const formato = "DD MM YY HH mm ss";

const now = moment();

const retirar = async (req, res) => {
	const { idBody } = req.body;
	const nowRetired = moment();

	const estacion = await Puesto.findById(idBody);
	const {estado, estacionado, fijo} = estacion;

	const retirarConfig = {
		estado: fijo === true ? 'reservado' : 'disponible',
		estacionado: false,
	}

	const vehiculoRetirado = await Puesto.findByIdAndUpdate(idBody, retirarConfig, {new: true})

	const date = vehiculoRetirado.hora_de_entrada;
	const fechaDeEntrada = date;
	const fechaDeSalida = nowRetired.format(formato);

	function calcularMonto(entryDate, exitDate) {
		let fecha1 = entryDate.split(" ");
		let fecha2 = exitDate.split(" ");

		let entryMin = fecha1[4];
		let exitMin = fecha2[4];
		let entrySeg = fecha1[5];
		let exitSeg = fecha2[5];

		let monto = 0;
		const minTranscurred = Math.abs(entryMin - exitMin);
		const segTranscurred = Math.abs(entrySeg - exitSeg);

		const totalSegundos = Math.abs((minTranscurred * 60 + segTranscurred));
		let segPar = 0;
		let segImpar = 0;

		const firsThreeHours = (totalSegundos) => {
			const segundero = [];
			for(let i = 0; i < totalSegundos; i++) {
				segundero.push(i);
			};
			segundero.forEach(seg => {
				if(seg % 2 === 0) {
					segPar += 1;
				}else {
					segImpar += 1;
				};
			});
			monto = segPar * 0.0003 + segImpar * 0.0001;
			return monto;
		};

		//Si el vehiculo dura menos de 1 hora
		if(totalSegundos < 60) {
			monto = totalSegundos * 0.0005;
			return monto;
		};

		//Si el vehiculo dura entre 1 y tres horas
		if(totalSegundos >= 60 && totalSegundos <= 180) {
			return firsThreeHours(totalSegundos);
		};

		//Si el vehiculo dura mas de tres horas
		if(totalSegundos > 180) {
			let M = firsThreeHours(totalSegundos) + Math.abs((totalSegundos - 180)*0.0002);
			let addPorcentaje = M * 0.3 / 100;
			monto = Math.abs(M + addPorcentaje);
			monto = monto.toString();
			monto = monto.slice(0,6);
			return monto;
		};
	}

	const facturaDeRetiro = {
		amount: calcularMonto(fechaDeEntrada, fechaDeSalida),
		In: fechaDeEntrada,
		out: fechaDeSalida
	};

	res.json(facturaDeRetiro).status(204)
};

export default retirar;