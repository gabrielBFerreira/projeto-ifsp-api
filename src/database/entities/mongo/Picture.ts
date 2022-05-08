import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

import { Image } from './Image';

@Entity('Figura')
class Picture {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column((type) => Image)
  image: Image;

  @Column()
  idProduto: number;

  @Column()
  idMetadado: number;
}

export { Picture };
