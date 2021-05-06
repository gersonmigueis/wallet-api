import { Router } from 'express'; 
import ContasController from '../controller/ContaController';
import { Conta } from '../entity/Conta';
const contasController = new ContasController();
const router = Router();

router.post('/', async (req, res) => {
  const { descricao } = req.body;
  const conta = new Conta(descricao);
  const contaSalva = await contasController.salvar(conta);
  res.json(contaSalva);
});

export default router;