import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1652193786200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Produto (
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
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Produto`);
  }
}
