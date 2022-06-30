import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './User';

@Entity('Telefone')
class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 4 })
  ddi: string;

  @Column('varchar', { length: 3 })
  ddd: string;

  @Column('varchar', { length: 15 })
  numero: string;

  @Column('varchar', { length: 25 })
  tipoTelefone: string;

  @Column()
  idUsuario: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUsuario' })
  usuario: User;
}

export { Phone };
