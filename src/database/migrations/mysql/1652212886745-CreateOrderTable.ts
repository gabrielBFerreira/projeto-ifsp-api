import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrderTable1652212886745 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Venda (
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
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Venda`);
  }
}
