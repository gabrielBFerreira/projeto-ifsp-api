import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('varchar', { length: 35 })
  email: string;

  @Column('varchar', { length: 20 })
  senha: string;

  @Column()
  dataNasc: Date;

  @Column('char')
  sexo: string;

  @Column('varchar', { length: 15 })
  genero: string;

  @Column()
  tipoConta: number;
}

export { User };
