import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Order } from './Order';
import { Product } from './Product';

@Entity('ProdutoVenda')
class OrderHasProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idProduto: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'idProduto' })
  produto: Product;

  @Column()
  idVenda: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'idVenda' })
  venda: Order;

  @Column()
  quantidade: number;
}

export { OrderHasProduct };
