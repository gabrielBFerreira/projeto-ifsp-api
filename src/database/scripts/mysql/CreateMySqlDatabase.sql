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

CREATE TABLE Endereco (
      id int NOT NULL AUTO_INCREMENT,
      rua varchar(60),
      numero varchar(5),
      complemento varchar(60),
      bairro varchar(60),
      cidade varchar(30),
      uf varchar(2),
      cep varchar(10),
      idUsuario int,
      PRIMARY KEY (id),
      FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
	   )

CREATE TABLE Telefone (
      id int NOT NULL AUTO_INCREMENT,
      ddi varchar(4),
      ddd varchar(3),
      numero varchar(15),
      tipoTelefone varchar(25),
      idUsuario int,
      PRIMARY KEY (id),
      FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
	   )
