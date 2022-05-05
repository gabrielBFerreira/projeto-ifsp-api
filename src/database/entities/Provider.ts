import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Fornecedor')
class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('varchar', { length: 50 })
  endereco: string;

  @Column('varchar', { length: 50 })
  contato: string;
}

export { Provider };
