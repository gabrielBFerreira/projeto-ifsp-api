import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('imagem')
class Image {

  @Column()
  dados: String;

  @Column()
  tipo: String;
}

export { Image };
