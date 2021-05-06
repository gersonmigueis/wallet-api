import { EntityRepository, Repository } from 'typeorm';
import Transacao from '../entity/Transacao';

interface Saldo {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transacao)
class TransacaoRepository extends Repository<Transacao>{
  
  public async getSaldo(): Promise<Saldo> {

    const transacoes = await this.find();

    const saldo = transacoes.reduce(
      (acumular, transacao) => {
        if (transacao.tipo === 'income') {
          acumular.income += Number(transacao.valor);
        } else {
          acumular.outcome += Number(transacao.valor);
        }

        return acumular;
      },
      {
        income: 0,
        outcome: 0,
      },
    );
    return {
      ...saldo,
      total: saldo.income - saldo.outcome,
    };
  }
}

export default TransacaoRepository;