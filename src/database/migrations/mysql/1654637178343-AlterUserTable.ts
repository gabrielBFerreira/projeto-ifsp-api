import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUserTable1654637178343 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE Usuario MODIFY COLUMN senha varchar(100)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE Usuario MODIFY COLUMN senha varchar(20)`
    );
  }
}
