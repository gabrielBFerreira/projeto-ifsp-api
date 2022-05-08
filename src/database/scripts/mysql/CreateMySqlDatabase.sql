CREATE TABLE Usuario (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(50),
        email varchar(50),
        senha varchar(20),
        dataNasc date,
        sexo char,
        genero varchar(15),
        tipoConta int,
        PRIMARY KEY (id)
      )
