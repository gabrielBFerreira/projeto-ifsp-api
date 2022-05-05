import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FormaPagamento')
class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column('varchar', { length: 25 })
  marca: string;

  @Column('text')
  descricao: string;
}

export { PaymentMethod };
