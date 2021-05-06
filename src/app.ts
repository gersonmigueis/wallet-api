import * as express from 'express';
import * as cors from 'cors';
import { conectarNoBanco } from './config/db';
import routerConta from './routes/contas';

export const app = express();

app.use(express.json());
app.use(cors());
app.use('/conta', routerConta);
app.use('/', (req, res) => res.send('API UP!'));

conectarNoBanco();

