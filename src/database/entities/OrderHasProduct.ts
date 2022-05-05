import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity('ProdutoVenda')
class OrderHasProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  statusEntrega: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'idProduto' })
  produto: Product;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'idVenda' })
  venda: Order;

  @Column()
  quantidade: number;
}

export { OrderHasProduct };
