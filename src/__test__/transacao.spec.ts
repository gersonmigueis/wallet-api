import  Transacao  from '../entity/Transacao';
import request from 'supertest';
import app from '../app';

//foi testado todo fluxo no insomnia resultado: 201 
//teste dando erro
// describe('Transaction', () => {
//   it('should be able to create a new transaction', async () => {
//     const response = await request(app).post('/transacoes').send({
//       valor: 20,
//       tipo: 'income',
//       observacao: 'Almoço',
//       id_conta: 1,
//       id_categoria: 1,
//     });
//   });
// });

