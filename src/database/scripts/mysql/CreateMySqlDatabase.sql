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
     );

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
	   );

CREATE TABLE Telefone (
      id int NOT NULL AUTO_INCREMENT,
      ddi varchar(4),
      ddd varchar(3),
      numero varchar(15),
      tipoTelefone varchar(25),
      idUsuario int,
      PRIMARY KEY (id),
      FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
	   );

CREATE TABLE Categoria (
      id int NOT NULL AUTO_INCREMENT,
      nome varchar(50),
      descricao text,
      PRIMARY KEY (id)
	   );

CREATE TABLE Produto (
      id int NOT NULL AUTO_INCREMENT,
      nome varchar(50),
      descricao text,
      marca varchar(25),
      tamanho varchar(4),
      estilo varchar(25),
      cores varchar(25),
      preco decimal(5,2),
      idCategoria int,
      PRIMARY KEY (id),
      FOREIGN KEY (idCategoria) REFERENCES Categoria(id)
     );

CREATE TABLE FormaPagamento (
      id int NOT NULL AUTO_INCREMENT,
      nome varchar(50),
      marca varchar(25),
      descricao text,
      PRIMARY KEY (id)
     );

CREATE TABLE Venda (
      id int NOT NULL AUTO_INCREMENT,
      dataVenda date,
      precoTotal decimal(5,2),
      statusPagamento int,
      statusEntrega int,
      idUsuario int,
      idFormaPagamento int,
      PRIMARY KEY (id),
      FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
      FOREIGN KEY (idFormaPagamento) REFERENCES FormaPagamento(id)
     );

CREATE TABLE ProdutoVenda (
      id int NOT NULL AUTO_INCREMENT,
      idProduto int,
      idVenda int,
      quantidade int,
      PRIMARY KEY (id),
      FOREIGN KEY (idProduto) REFERENCES Produto(id),
      FOREIGN KEY (idVenda) REFERENCES Venda(id)
     );

CREATE TABLE Fornecedor (
      id int NOT NULL AUTO_INCREMENT,
      nome varchar(50),
      endereco varchar(50),
      contato varchar(50),
      PRIMARY KEY (id)
    );

CREATE TABLE Estoque (
      id int NOT NULL AUTO_INCREMENT,
      operacao int,
      quantidade int,
      dataHora datetime,
      idProduto int,
      idFornecedor int,
      PRIMARY KEY (id),
      FOREIGN KEY (idProduto) REFERENCES Produto(id),
      FOREIGN KEY (idFornecedor) REFERENCES Fornecedor(id)
    );

ALTER TABLE Usuario MODIFY COLUMN senha varchar(100);

INSERT INTO Categoria (
  nome, descricao
) VALUES (
  'Vestidos', 'Roupas que cobrem do ombro ou busto às pernas com uma saia, podendo ou não ter decotes.');

INSERT INTO FormaPagamento
(`nome`,
`descricao`)
VALUES
('Boleto',
'Boleto bancário com vencimento de três dias úteis após geração.');

INSERT INTO Fornecedor (`id`, `nome`, `endereco`, `contato`) VALUES ('1', 'Fornecedor Teste', 'Av. NTI', 'teste@gmail.com');
