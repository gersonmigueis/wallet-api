import { Router } from 'express';
import contasRouter from '../routes/contas';
import transacaoRouter from '../routes/transacao';
import categoriaRouter from '../routes/categoria'
const routes = Router();

routes.use('/contas', contasRouter);
routes.use('/transacoes', transacaoRouter);
routes.use('/categorias', categoriaRouter);
export default routes;
