import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
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

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'idProduto' })
  produto: Product;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'idFornecedor' })
  fornecedor: Provider;
}

export { Stock };
