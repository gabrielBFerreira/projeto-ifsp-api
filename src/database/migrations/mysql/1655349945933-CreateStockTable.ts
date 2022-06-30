import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStockTable1655349945933 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Estoque (
        id int NOT NULL AUTO_INCREMENT,
        operacao int,
        quantidade int,
        dataHora datetime,
        idProduto int,
        idFornecedor int,
        PRIMARY KEY (id),
        FOREIGN KEY (idProduto) REFERENCES Produto(id),
        FOREIGN KEY (idFornecedor) REFERENCES Fornecedor(id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Estoque`);
  }
}
