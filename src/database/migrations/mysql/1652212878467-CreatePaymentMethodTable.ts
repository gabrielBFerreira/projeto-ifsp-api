import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePaymentMethodTable1652212878467
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE FormaPagamento (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(50),
        marca varchar(25),
        descricao text,
        PRIMARY KEY (id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE FormaPagamento`);
  }
}
