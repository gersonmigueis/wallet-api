import { Router } from 'express'; 
import CategoriaController from '../controller/CategoriaController';
import {Categoria} from '../entity/Categoria';
const categoriaController = new CategoriaController();
const CategoriaRouter = Router();

CategoriaRouter.post('/', async (request, response) => {
  const { descricao } = request.body;
  const conta = new Categoria(descricao);
  const categoriaalva = await categoriaController.salvar(conta);
  response.status(201).json(categoriaalva);
});

export default CategoriaRouter;