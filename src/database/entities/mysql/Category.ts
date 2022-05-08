import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categoria')
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('text')
  descricao: string;
}

export { Category };
