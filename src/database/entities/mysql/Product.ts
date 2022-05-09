import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Produto')
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('text')
  descricao: string;

  @Column('varchar', { length: 25 })
  marca: string;

  @Column('varchar', { length: 4 })
  tamanho: string;

  @Column('varchar', { length: 25 })
  estilo: string;

  @Column('varchar', { length: 25 })
  cores: string;

  @Column('decimal', { precision: 5, scale: 2 })
  preco: number;

  @Column()
  idCategoria: number;
}

export { Product };
