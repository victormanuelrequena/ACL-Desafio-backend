import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routesPuestos from './src/routes/puestos.routes.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use('/', routesPuestos);


//Settings
app.set('port', 4000);

export default app;