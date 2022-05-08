import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1651849323626 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Usuario (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(50),
        email varchar(50),
        senha varchar(20),
        dataNasc date,
        sexo char,
        genero varchar(15),
        tipoConta int,
        PRIMARY KEY (id)
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Usuario`);
  }
}
