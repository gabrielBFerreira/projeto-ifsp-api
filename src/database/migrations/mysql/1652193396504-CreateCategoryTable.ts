import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoryTable1652193396504 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Categoria (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(50),
        descricao text,
        PRIMARY KEY (id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Categoria`);
  }
}
