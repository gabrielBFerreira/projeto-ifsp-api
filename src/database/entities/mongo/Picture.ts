import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('Figura')
class Picture {
  @ObjectIdColumn()
  _id: ObjectID;

  // @Column()
  // nome: string;

  @Column()
  descricao: string;

  @Column()
  caminho: string;

  @Column()
  idProduto: number;

  @Column()
  idMetadado: number;
}

export { Picture };
