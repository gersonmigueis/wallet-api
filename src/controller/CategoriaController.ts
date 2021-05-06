import { getManager } from "typeorm";
import { Categoria } from '../entity/Categoria';

class CategoriaController {
  async salvar (Categoria : Categoria) {
   const categoriaSalva = await getManager().save(Categoria);
   return categoriaSalva;
  }
}

export default CategoriaController;