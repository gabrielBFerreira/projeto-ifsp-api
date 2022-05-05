import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('Metadado')
class Metadata {

  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nome: String;

  @Column()
  descricao: String;

  @Column()
  url: String
}

export { Metadata };
