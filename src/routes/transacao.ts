import { Router } from 'express';
import { getRepository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
const transacaoRoutes = Router();
import Transacao from '../entity/Transacao';
import TransacaoController from '../controller/TransacaoController';
import TransacaoRepository from '../repositories/TransacaoRepository';
const transacaoController = new TransacaoController ();
//const transacaoRepo = new TransacaoRepository();

transacaoRoutes.get('/', async (request, response) => {
    const transacoesRepositorio = getCustomRepository(TransacaoRepository);
    const listarTransacoes = await getRepository(Transacao).find({ relations: ["categoria"]});
    const saldo = await transacoesRepositorio.getSaldo();  
    if (listarTransacoes) {
      return response.status(200).json({ listarTransacoes, saldo });
    } else {
      return response.status(400);
    }
    
});

transacaoRoutes.post('/', async (request, response) => {
  const { valor, tipo, observacao, id_conta, id_categoria } = request.body;
  const transacao = new Transacao(valor, tipo, observacao, id_conta, id_categoria);
  const transacaoSalva = await transacaoController.salvar(transacao);
  if (transacaoSalva) {
    response.status(201).json(transacaoSalva);
  } else {
    response.status(400);
  }
}); 

export default transacaoRoutes;


