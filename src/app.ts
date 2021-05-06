import * as express from 'express';
import * as cors from 'cors';
import { conectarNoBanco } from './config/db';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/', (req, res) => res.send('API UP!'));

conectarNoBanco();
export default app;
