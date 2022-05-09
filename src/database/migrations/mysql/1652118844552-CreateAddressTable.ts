import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAddressTable1652118844552 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Endereco (
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
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Endereco`);
  }
}
