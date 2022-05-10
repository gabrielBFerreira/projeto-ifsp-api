import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrderHasProductTable1652212894729
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE ProdutoVenda (
        id int NOT NULL AUTO_INCREMENT,
        idProduto int,
        idVenda int,
        quantidade int,
        PRIMARY KEY (id),
        FOREIGN KEY (idProduto) REFERENCES Produto(id),
        FOREIGN KEY (idVenda) REFERENCES Venda(id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE ProdutoVenda`);
  }
}
