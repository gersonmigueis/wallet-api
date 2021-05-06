import { createConnection } from 'typeorm';

export const conectarNoBanco = async () => {
  const conexao = await createConnection();
  console.log(`App contectado ${conexao.options.database}`);

  process.on('SIGINT', () => {
    conexao.close().then(() => console.log('Conexao fechada'));
  })

};

