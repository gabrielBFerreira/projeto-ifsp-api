import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { PaymentMethod } from './PaymentMethod';
import { User } from './User';

@Entity('Venda')
class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dataVenda: Date;

  @Column('decimal', { precision: 5, scale: 2 })
  precoTotal: number;

  @Column()
  statusPagamento: number;

  @Column()
  statusEntrega: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUsuario' })
  usuario: User;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'idFormaPagamento' })
  formaPagamento: PaymentMethod;
}

export { Order };
