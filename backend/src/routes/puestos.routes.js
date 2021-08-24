const { Router } = require('express');
const obtenerPuestos = require('../controllers/puestos/obtenerPuestos.js');
const crearPuesto = require('../controllers/puestos/crearPuesto.js');
const estacionarVehiculo = require('../controllers/puestos/estacionarVehiculo.js');
const reservarPuesto = require('../controllers/puestos/reservarPuesto.js');
const retirarReservacion = require('../controllers/puestos/retirarReservacion.js');
const estacionarReservado = require('../controllers/puestos/estacionarReservado.js');
const eliminarPuesto = require('../controllers/puestos/eliminarPuesto.js');
const retirar = require('../controllers/puestos/retirarVehiculo.js');

const router = Router();

router.get('/', obtenerPuestos);

router.post('/crear', crearPuesto);

router.put('/estacionar', estacionarVehiculo);

router.put('/reservar', reservarPuesto);

router.put('/reservado/estacionar', estacionarReservado);

router.put('/reservado/cancelar', retirarReservacion);

router.put('/retirar', retirar);

router.delete('/eliminar', eliminarPuesto);

module.exports = router;