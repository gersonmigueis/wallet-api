# API de Carteira

<p>API do app carteira. Este Projeto utiliza Node.js, TypeSctipe, TypeORM, Express, Postgres e Docker </p>

Steps to run this project:

1. Para instalar as dependencias do Projeto `npm i`. E 
2. Primeiro inicie o Container onde está o BD Postgres : docker-compose up -d
2.1 Observe a rede do seu docker.  
3. Para iniciar o projeto comando : npm run dev ou npm start.  
4. Setup do database está em `ormconfig.json`.
5. O projeto contem uma suite de testes, onde estou testandos as entidades usadas na API.
Obs: Alguns testes estão comentados por esta ocorrendo erro, porem foi testado via INSOMNIA todo o FLUXO das requisições. 

6. Payloads de Requisições do EndPoint de Transacoes
   POST / transacoes : body
   {
    "valor": 25,
    "tipo": "outcome",
    "observacao": "Almoço",
    "id_conta": 1,
    "id_categoria": 1
  }
Obs: Note que vai como chave estrangeira o Id das tabelas de Conta e Categoria.

  GET / transacoes : response
  {
  "listarTransacoes": [
    {
      "valor": 20,
      "tipo": "income",
      "observacao": "Almoço",
      "categoria": {
        "descricao": "Comida",
        "id": 1
      },
      "id": 1,
      "created_at": "2021-05-06T12:32:09.943Z",
      "updated_at": "2021-05-06T12:32:09.943Z"
    },
    {
      "valor": 20,
      "tipo": "income",
      "observacao": "Almoço",
      "categoria": {
        "descricao": "Comida",
        "id": 1
      },
      "id": 2,
      "created_at": "2021-05-06T16:11:59.151Z",
      "updated_at": "2021-05-06T16:11:59.151Z"
    },
    {
      "valor": 25,
      "tipo": "outcome",
      "observacao": "Almoço",
      "categoria": {
        "descricao": "Comida",
        "id": 1
      },
      "id": 3,
      "created_at": "2021-05-06T17:46:46.867Z",
      "updated_at": "2021-05-06T17:46:46.867Z"
    }
  ],
  "saldo": {
    "income": 40,
    "outcome": 25,
    "total": 15
  }
}

7: Payloads de Requisições do EndPoint conta.
 POST / constas  categorias 
 {
   "descricao" : "Next"
 }
8: Payloads de Requisições do EndPoint categoria. 

 {
   "descricao" : "Comidas"
 }

