import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('TokenLogin')
class Metadata {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  url: string;
}

export { Metadata };
