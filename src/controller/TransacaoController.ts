import { getManager, getRepository } from 'typeorm';
import Transacao from '../entity/Transacao'
import TransacaoRepository from '../repositories/TransacaoRepository';


class TransacaoController {

    async salvar (transacao: Transacao) {
      const salvarTransacao = await getManager().save(transacao);
      return salvarTransacao;
    }
}
export default TransacaoController;