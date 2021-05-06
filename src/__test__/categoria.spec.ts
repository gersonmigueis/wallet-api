import { Categoria } from '../entity/Categoria';

  test('Deve criar uma categoria', () => {
    const descticao = 'Next'
    const conta = new Categoria(descticao);
    expect(conta.descricao).toBe(descticao);
  });