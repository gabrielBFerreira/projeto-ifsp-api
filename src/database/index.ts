import { mongoConnection, mysqlConnection } from './datasource';

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
