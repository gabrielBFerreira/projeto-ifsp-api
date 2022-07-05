import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('Figura')
class Picture {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  caminho: string;

  @Column()
  idProduto: number;

  @Column()
  idMetadado: ObjectID;
}

export { Picture };
