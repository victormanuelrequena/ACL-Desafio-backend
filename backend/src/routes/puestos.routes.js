import { Router } from 'express';
import obtenerPuestos from '../controllers/puestos/obtenerPuestos.js';
import crearPuesto from '../controllers/puestos/crearPuesto.js';
import estacionarVehiculo from '../controllers/puestos/estacionarVehiculo.js';
import reservarPuesto from '../controllers/puestos/reservarPuesto.js';
import retirarReservacion from '../controllers/puestos/retirarReservacion.js';
import estacionarReservado from '../controllers/puestos/estacionarReservado.js';
import eliminarPuesto from '../controllers/puestos/eliminarPuesto.js'
import retirar from '../controllers/puestos/retirarVehiculo.js'

const router = Router();

router.get('/', obtenerPuestos);

router.post('/crear', crearPuesto);

router.put('/estacionar', estacionarVehiculo);

router.put('/reservar', reservarPuesto);

router.put('/reservado/estacionar', estacionarReservado);

router.put('/reservado/cancelar', retirarReservacion);

router.put('/retirar', retirar);

router.delete('/eliminar', eliminarPuesto);

export default router;