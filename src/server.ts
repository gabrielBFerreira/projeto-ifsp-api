import cors from 'cors';
import 'reflect-metadata';
import express from 'express';

import './configs/dotenv';
import './database';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/', () => 'Rota raiz');

app.listen(3333, () => {
  console.log('A API está no ar!');
});
