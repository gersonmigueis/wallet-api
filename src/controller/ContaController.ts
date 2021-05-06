import { getManager } from "typeorm";
import { Conta } from '../entity/Conta';
class ContasController {
  async salvar (conta : Conta) {
   const contaSalva = await getManager().save(conta);
   return contaSalva;
  }
}

export default ContasController;