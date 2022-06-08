import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Address } from './Address';
import { Phone } from './Phone';

@Entity('Usuario')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('varchar', { length: 35 })
  email: string;

  @Column('varchar', { length: 100 })
  senha: string;

  @Column()
  dataNasc: Date;

  @Column('char')
  sexo: string;

  @Column('varchar', { length: 15 })
  genero: string;

  @Column()
  tipoConta: number;

  @OneToMany(() => Address, (endereco) => endereco.usuario)
  enderecos: Address[];

  @OneToMany(() => Phone, (telefone) => telefone.usuario)
  telefones: Phone[];
}

export { User };
