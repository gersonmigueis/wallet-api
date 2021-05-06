import { Router } from 'express'; 
import ContasController from '../controller/ContaController';
import {Conta} from '../entity/Conta';
const contasController = new ContasController();
const contasRouter = Router();

contasRouter.post('/', async (request, response) => {
  const { descricao } = request.body;
  const conta = new Conta(descricao);
  const contaSalva = await contasController.salvar(conta);
  response.status(201).json(contaSalva);
});

export default contasRouter;