import { mongoConnection } from './configs/mongo';
import { mysqlConnection } from './configs/mysql';

mysqlConnection
  .initialize()
  .then((cnx) => {
    console.log(`Conectado com sucesso ao MySQL. Dados: ${cnx}`);
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao MySQL. Dados: ${err}`);
  });

mongoConnection
  .initialize()
  .then((cnx) => {
    console.log(`Conectado com sucesso ao MongoDB. Dados: ${cnx}`);
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao MongoDB. Dados: ${err}`);
  });
