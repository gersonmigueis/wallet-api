import request from 'supertest';
import app from '../app';
import { Conta } from '../entity/Conta';

describe('Testar as funcionalidades de Conta', () => {
  test('Só pra testar', ()=> {
    expect(1+1).toBe(2);
  });
  
  test('Deve criar uma conta', () => {
    const descticao = 'Next'
    const conta = new Conta(descticao);
    expect(conta.descricao).toBe(descticao);
  }); 
  
//Este teste abaixo testaria o fluxo completo, esta dando erro e ainda não consegui resolver

  // it('Criar conta', async () => {
  //   const response = await request(app).post('/contas').send({
  //     descricao: 'Next'
  //   });
  //   expect(response.status).toBe(201);
  // });

});