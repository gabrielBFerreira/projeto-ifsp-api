import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from './Product';
import { Provider } from './Provider';

@Entity('Estoque')
class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  operacao: number;

  @Column()
  quantidade: number;

  @CreateDateColumn()
  dataHora: Date;

  @Column()
  idProduto: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'idProduto' })
  produto: Product;

  @Column()
  idFornecedor: number;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'idFornecedor' })
  fornecedor: Provider;
}

export { Stock };
