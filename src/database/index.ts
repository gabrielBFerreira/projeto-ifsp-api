import { createConnection } from 'typeorm';

import { User } from './entities/User';

createConnection()
  .then((cnx) => {
    console.log(`Conectado com sucesso. Dados: ${cnx}`);
  })
  .catch((err) => {
    console.log(`Erro ao conectar. Dados: ${err}`);
  });
