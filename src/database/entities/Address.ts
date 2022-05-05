import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('Endereco')
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 60 })
  rua: string;

  @Column('varchar', { length: 5 })
  numero: string;

  @Column('varchar', { length: 60 })
  bairro: string;

  @Column('varchar', { length: 30 })
  cidade: string;

  @Column('varchar', { length: 2 })
  uf: string;

  @Column('varchar', { length: 10 })
  cep: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUsuario' })
  usuario: User;
}

export { Address };
