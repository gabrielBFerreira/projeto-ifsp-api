import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePhoneTable1652118853805 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Telefone (
      id int NOT NULL AUTO_INCREMENT,
      ddi varchar(4),
      ddd varchar(3),
      numero varchar(15),
      tipoTelefone varchar(25),
      idUsuario int,
      PRIMARY KEY (id),
      FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Telefone`);
  }
}
