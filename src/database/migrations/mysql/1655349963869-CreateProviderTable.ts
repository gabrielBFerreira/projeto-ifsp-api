import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProviderTable1655349963869 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Fornecedor (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(50),
        endereco varchar(50),
        contato varchar(50),
        PRIMARY KEY (id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Fornecedor`);
  }
}
